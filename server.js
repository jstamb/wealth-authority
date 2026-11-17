import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleLead } from './lib/leadProxy.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

// Serve from dist folder in production
const STATIC_DIR = path.join(__dirname, 'dist');

// Load schema data for SSR injection
let schemaData = { hubs: {}, articles: {}, cities: {}, meta: {} };
try {
  const schemaPath = path.join(STATIC_DIR, 'schema-data.json');
  if (fs.existsSync(schemaPath)) {
    schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
    console.log(`Loaded schema data: ${Object.keys(schemaData.hubs).length} hubs, ${Object.keys(schemaData.articles).length} articles, ${Object.keys(schemaData.cities).length} cities`);
  }
} catch (err) {
  console.warn('Could not load schema data:', err.message);
}

// Get schema markup for a given URL
function getSchemaForUrl(url) {
  const hubMatch = url.match(/^\/hub\/([^\/\?]+)/);
  if (hubMatch && schemaData.hubs[hubMatch[1]]) {
    return schemaData.hubs[hubMatch[1]];
  }

  const articleMatch = url.match(/^\/article\/([^\/\?]+)/);
  if (articleMatch && schemaData.articles[articleMatch[1]]) {
    return schemaData.articles[articleMatch[1]];
  }

  const cityMatch = url.match(/^\/city\/([^\/\?]+)/);
  if (cityMatch && schemaData.cities[cityMatch[1]]) {
    return schemaData.cities[cityMatch[1]];
  }

  return null;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Per-route title/description/canonical (built by scripts/generateSchemaData.ts).
// index.html ships the homepage tags; without this every route's raw HTML told
// crawlers it was a duplicate of the homepage (canonical -> /).
function getMetaForUrl(url) {
  const key = url.length > 1 ? url.replace(/\/+$/, '') : url;
  return (schemaData.meta && schemaData.meta[key]) || null;
}

function injectMeta(html, meta) {
  if (!meta) return html;
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const c = escapeHtml(meta.canonical);
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${c}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${c}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${t}" />`);
  if (d) {
    out = out
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}" />`)
      .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${d}" />`);
  }
  return out;
}

// Inject schema into HTML
function injectSchema(html, schema) {
  if (!schema) return html;
  // Insert schema scripts before </head>
  return html.replace('</head>', `${schema}\n</head>`);
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // Remove query strings and prevent directory traversal
  const safeUrl = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[\/\\])+/, '');

  // Lead proxy (server-side so the GHL webhook URL never reaches the browser)
  if (safeUrl === '/api/lead' || safeUrl === '/api/lead/') {
    handleLead(req, res).catch((err) => {
      console.error('lead: unhandled error', err && err.message);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end('{"ok":false,"error":"Server error"}');
      }
    });
    return;
  }

  // SEO files - serve from dist
  if (safeUrl === '/sitemap.xml') {
    const sitemapPath = path.join(STATIC_DIR, 'sitemap.xml');
    fs.readFile(sitemapPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Sitemap not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/xml' });
        res.end(content);
      }
    });
    return;
  }

  if (safeUrl === '/robots.txt') {
    const robotsPath = path.join(STATIC_DIR, 'robots.txt');
    fs.readFile(robotsPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Robots.txt not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
      }
    });
    return;
  }

  // Map URL to file path
  let filePath = path.join(STATIC_DIR, safeUrl === '/' ? 'index.html' : safeUrl);
  let ext = path.extname(filePath).toLowerCase();

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err || !ext) {
      // If it looks like a static asset but is missing, return 404
      if (ext && ext.match(/\.(png|jpg|jpeg|gif|svg|css|js|ico|json|xml|txt|woff|woff2)$/)) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }

      // Otherwise, serve index.html for SPA routing with schema injection
      fs.readFile(path.join(STATIC_DIR, 'index.html'), 'utf-8', (err2, content) => {
        if (err2) {
          res.writeHead(500);
          res.end('Server Error loading index.html');
        } else {
          // Inject schema for this URL
          const schema = getSchemaForUrl(safeUrl);
          const html = injectSchema(injectMeta(content, getMetaForUrl(safeUrl)), schema);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        }
      });
      return;
    }

    // Serve static file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
