import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

// Serve from dist folder in production
const STATIC_DIR = path.join(__dirname, 'dist');

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

      // Otherwise, serve index.html for SPA routing
      fs.readFile(path.join(STATIC_DIR, 'index.html'), (err2, content) => {
        if (err2) {
          res.writeHead(500);
          res.end('Server Error loading index.html');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
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
