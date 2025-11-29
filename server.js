
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.tsx': 'text/plain',
  '.ts': 'text/plain'
};

const server = http.createServer((req, res) => {
  // Remove query strings and potential directory traversal
  const safeUrl = path.normalize(req.url.split('?')[0]).replace(/^(\.\.[\/\\])+/, '');
  
  // 1. SEO FILES PRIORITY HANDLING
  // We explicitly serve these files if requested, ignoring SPA routing rules
  if (safeUrl === '/sitemap.xml') {
    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    fs.readFile(sitemapPath, (err, content) => {
      if (err) {
        console.error('Sitemap not found:', err);
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
    const robotsPath = path.join(__dirname, 'robots.txt');
    fs.readFile(robotsPath, (err, content) => {
      if (err) {
        console.error('Robots.txt not found:', err);
        res.writeHead(404);
        res.end('Robots.txt not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
      }
    });
    return;
  }

  // 2. STANDARD FILE HANDLING
  // Map URL to file system path
  // If route is root '/', map to index.html
  let filePath = path.join(__dirname, safeUrl === '/' ? 'index.html' : safeUrl);
  let ext = path.extname(filePath).toLowerCase();

  // 3. FILE EXISTENCE CHECK
  fs.access(filePath, fs.constants.F_OK, (err) => {
    // If file doesn't exist or has no extension (like /city/nyc)
    if (err || !ext) {
      
      // If it looked like a static asset (has extension) but is missing, return 404
      // This prevents serving index.html for missing images/css
      if (ext && (ext.match(/\.(png|jpg|jpeg|gif|svg|css|js|ico|json|xml|txt)$/))) {
         res.writeHead(404);
         res.end('Not Found');
         return;
      }

      // Otherwise, fall back to index.html for Single Page Application routing
      fs.readFile(path.join(__dirname, 'index.html'), (err2, content) => {
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

    // 4. SERVE STATIC FILE
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
