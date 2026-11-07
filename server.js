import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const STATIC_DIR = path.join(__dirname, 'dist');
const BASE_URL = 'https://www.wealthauthority.org';

let schemaData = { hubs: {}, articles: {}, cities: {} };
try {
  const schemaPath = path.join(STATIC_DIR, 'schema-data.json');
  if (fs.existsSync(schemaPath)) {
    schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
    console.log(`Loaded schema data: ${Object.keys(schemaData.hubs).length} hubs, ${Object.keys(schemaData.articles).length} articles, ${Object.keys(schemaData.cities).length} cities`);
  }
} catch (err) {
  console.warn('Could not load schema data:', err.message);
}

let routeMeta = {};
try {
  const metaPath = path.join(STATIC_DIR, 'route-meta.json');
  if (fs.existsSync(metaPath)) {
    const parsed = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    routeMeta = parsed.routes || {};
    console.log(`Loaded route meta for ${Object.keys(routeMeta).length} routes`);
  }
} catch (err) {
  console.warn('Could not load route meta:', err.message);
}

function getSchemaForUrl(url) {
  const hubMatch = url.match(/^\/hub\/([^/?]+)/);
  if (hubMatch && schemaData.hubs[hubMatch[1]]) {
    return schemaData.hubs[hubMatch[1]];
  }

  const articleMatch = url.match(/^\/article\/([^/?]+)/);
  if (articleMatch && schemaData.articles[articleMatch[1]]) {
    return schemaData.articles[articleMatch[1]];
  }

  const cityMatch = url.match(/^\/city\/([^/?]+)/);
  if (cityMatch && schemaData.cities[cityMatch[1]]) {
    return schemaData.cities[cityMatch[1]];
  }

  return null;
}

function injectSchema(html, schema) {
  if (!schema) return html;
  return html.replace('</head>', `${schema}\n</head>`);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceAttr(html, regex, value) {
  if (!regex.test(html)) return html;
  return html.replace(regex, (_match, open, close) => `${open}${value}${close}`);
}

function applyRouteMeta(html, meta) {
  if (!meta) return html;
  const title = escapeHtml(meta.title || '');
  const description = escapeHtml(meta.description || '');
  const canonical = escapeHtml(meta.canonical || '');
  let next = html;
  if (title) {
    next = next.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    next = replaceAttr(next, /(<meta property="og:title" content=")[^"]*(")/, title);
    next = replaceAttr(next, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  }
  if (description) {
    next = replaceAttr(next, /(<meta name="description" content=")[^"]*(")/, description);
    next = replaceAttr(next, /(<meta property="og:description" content=")[^"]*(")/, description);
    next = replaceAttr(next, /(<meta name="twitter:description" content=")[^"]*(")/, description);
  }
  if (canonical) {
    next = replaceAttr(next, /(<link rel="canonical" href=")[^"]*(")/, canonical);
    next = replaceAttr(next, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  }
  return next;
}

function normalizeRoute(url) {
  const withoutQuery = url.split('?')[0];
  let safe = path.posix.normalize(withoutQuery);
  if (!safe.startsWith('/')) safe = `/${safe}`;
  if (safe.includes('..')) return '/';
  if (safe.length > 1 && safe.endsWith('/')) safe = safe.slice(0, -1);
  if (safe === '/index.html') return '/';
  return safe;
}

function notFound(res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Not Found | Wealth Authority</title>
  <meta name="robots" content="noindex, follow" />
</head>
<body>
  <main>
    <h1>Page not found</h1>
    <p>That page is not on Wealth Authority.</p>
    <p><a href="${BASE_URL}/">Back to the homepage</a></p>
  </main>
</body>
</html>`;
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
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

const ASSET_EXT = /\.(png|jpg|jpeg|gif|svg|css|js|ico|json|xml|txt|woff|woff2)$/;

function sendFile(res, filePath, contentType, encoding) {
  fs.readFile(filePath, encoding, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const route = normalizeRoute(req.url || '/');
  const rel = route === '/' ? '' : route.replace(/^\//, '');
  const filePath = path.join(STATIC_DIR, rel || 'index.html');
  const ext = path.extname(filePath).toLowerCase();

  if (route === '/sitemap.xml') {
    sendFile(res, path.join(STATIC_DIR, 'sitemap.xml'), 'application/xml');
    return;
  }

  if (route === '/robots.txt') {
    sendFile(res, path.join(STATIC_DIR, 'robots.txt'), 'text/plain; charset=utf-8');
    return;
  }

  fs.access(filePath, fs.constants.F_OK, (err) => {
    const isAsset = Boolean(ext) && ASSET_EXT.test(ext);
    if (!err && isAsset) {
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      sendFile(res, filePath, contentType);
      return;
    }

    if (err && isAsset) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    const hasRouteTable = Object.keys(routeMeta).length > 0;
    const meta = routeMeta[route];
    if (hasRouteTable && !meta) {
      notFound(res);
      return;
    }

    fs.readFile(path.join(STATIC_DIR, 'index.html'), 'utf-8', (err2, content) => {
      if (err2) {
        res.writeHead(500);
        res.end('Server Error loading index.html');
        return;
      }
      const withMeta = applyRouteMeta(content, meta);
      const schema = getSchemaForUrl(route);
      const html = injectSchema(withMeta, schema);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
