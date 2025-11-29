#!/usr/bin/env node
/**
 * Sitemap Generator
 *
 * Generates sitemap.xml from article data files
 * Usage: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.wealthauthority.org';
const DATA_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_FILE = path.join(__dirname, '..', 'sitemap.xml');

// Extract slugs from TypeScript files
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

// Generate sitemap XML
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/find-advisor</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/strategies</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/cities</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Topic Hubs -->
  <url>
    <loc>${BASE_URL}/hub/retirement-planning</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/financial-planning</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/find-advisor</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/tax-planning</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/estate-planning</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/investment-strategies</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/high-net-worth</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/hub/risk-management</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- City Pages -->
`;

  // City pages
  const cities = ['new-york-city', 'los-angeles', 'chicago', 'houston', 'phoenix', 'miami', 'seattle', 'denver', 'dallas', 'san-francisco'];
  cities.forEach(city => {
    xml += `  <url>
    <loc>${BASE_URL}/city/${city}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += '\n  <!-- Articles -->\n';

  // Get all article files
  const articleFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Articles.ts'));

  const allSlugs = [];
  articleFiles.forEach(file => {
    const slugs = extractSlugs(path.join(DATA_DIR, file));
    allSlugs.push(...slugs);
  });

  // Sort and dedupe
  const uniqueSlugs = [...new Set(allSlugs)].sort();

  uniqueSlugs.forEach(slug => {
    xml += `  <url>
    <loc>${BASE_URL}/article/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += '</urlset>\n';

  return xml;
}

// Main
const sitemap = generateSitemap();
fs.writeFileSync(OUTPUT_FILE, sitemap);

// Count URLs
const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✓ Generated sitemap.xml with ${urlCount} URLs`);
