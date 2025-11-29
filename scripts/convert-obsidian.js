#!/usr/bin/env node
/**
 * Obsidian to Website Content Converter
 *
 * Converts markdown files from Obsidian vault to TypeScript Article objects
 * for the Wealth Authority website.
 *
 * Usage: node scripts/convert-obsidian.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OBSIDIAN_BASE = '/Users/cosmodrome/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/8 - Projects/Wealth Management/Content';
const OUTPUT_DIR = path.join(__dirname, '..', 'data');

// Hub ID mapping from Obsidian folder names to website hub IDs
const HUB_ID_MAP = {
  'Retirement Planning': 'retirement',
  'Financial Planning': 'financial-planning',
  'Find a Wealth Manager': 'find-advisor',
  'Tax Planning': 'tax-planning',
  'Estate Planning': 'estate-planning',
  'Investment Strategies': 'investment',
  'High Net Worth': 'high-net-worth',
  'Risk Management': 'risk-management'
};

// City ID mapping
const CITY_ID_MAP = {
  'NYC': 'nyc',
  'Los Angeles': 'los-angeles',
  'Chicago': 'chicago',
  'Houston': 'houston',
  'Phoenix': 'phoenix',
  'Miami': 'miami',
  'Seattle': 'seattle',
  'Denver': 'denver',
  'Dallas': 'dallas',
  'San Francisco': 'san-francisco',
  'Boston': 'boston',
  'Austin': 'austin',
  'San Diego': 'san-diego',
  'San Jose': 'san-jose',
  'Philadelphia': 'philadelphia'
};

// Simple YAML frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content };
  }

  const yamlContent = match[1];
  const markdownContent = match[2];
  const data = {};

  // Parse YAML lines
  let currentKey = null;
  let currentValue = [];
  let inArray = false;

  yamlContent.split('\n').forEach(line => {
    // Array item
    if (line.match(/^\s+-\s/)) {
      if (inArray) {
        // Simple array item
        const value = line.replace(/^\s+-\s/, '').trim();
        if (!data[currentKey]) data[currentKey] = [];

        // Check if it's an object item (has colon)
        if (value.includes(':')) {
          const obj = {};
          const parts = value.split(':').map(s => s.trim());
          obj[parts[0]] = parts.slice(1).join(':').trim().replace(/^["']|["']$/g, '');
          data[currentKey].push(obj);
        } else {
          data[currentKey].push(value.replace(/^["']|["']$/g, ''));
        }
      }
      return;
    }

    // Key-value pair
    const kvMatch = line.match(/^([a-z_-]+):\s*(.*)$/i);
    if (kvMatch) {
      currentKey = kvMatch[1];
      const value = kvMatch[2].trim();

      if (value === '' || value === '|') {
        // Start of array or multiline
        inArray = true;
        data[currentKey] = [];
      } else {
        inArray = false;
        // Remove quotes
        data[currentKey] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { data, content: markdownContent };
}

// Convert markdown to HTML
function markdownToHtml(md) {
  let html = md;

  // Remove markdown code blocks (``` sections) - convert to preformatted text
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```\w*\n?/g, '').trim();
    return `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm"><code>${code}</code></pre>`;
  });

  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').filter(c => c.trim()).map(c => c.trim());
    const rows = bodyRows.trim().split('\n').map(row =>
      row.split('|').filter(c => c.trim()).map(c => c.trim())
    );

    let table = '<div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse">';
    table += '<thead><tr class="border-b-2 border-gray-300">';
    headers.forEach(h => {
      table += `<th class="py-3 px-4 font-bold">${h}</th>`;
    });
    table += '</tr></thead><tbody>';
    rows.forEach(row => {
      table += '<tr class="border-b border-gray-100">';
      row.forEach(cell => {
        table += `<td class="py-3 px-4">${cell}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody></table></div>';
    return table;
  });

  // Headers (h3, h4)
  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-bold mt-6 mb-3">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Blockquotes (callouts)
  html = html.replace(/^> (.+)$/gm, '<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4"><p class="text-blue-800">$1</p></div>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 space-y-2 my-4">$&</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<oli>$1</oli>');
  html = html.replace(/(<oli>.*<\/oli>\n?)+/g, (match) => {
    return '<ol class="list-decimal pl-6 space-y-2 my-4">' +
           match.replace(/<oli>/g, '<li>').replace(/<\/oli>/g, '</li>') +
           '</ol>';
  });

  // Paragraphs - wrap lines that aren't already wrapped
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<')) return block;
    return `<p>${block}</p>`;
  }).join('\n\n');

  // Clean up
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

// Extract sections from markdown
function extractSections(content) {
  const sections = [];

  // Split by ## headers (but not ### or ####)
  const parts = content.split(/^## /gm);

  parts.forEach((part, index) => {
    if (index === 0) return; // Skip content before first ##

    const lines = part.split('\n');
    const title = lines[0].trim();
    const body = lines.slice(1).join('\n').trim();

    // Skip Key Takeaways, FAQs, and Bottom Line - handled separately
    if (title === 'Key Takeaways' ||
        title === 'Frequently Asked Questions' ||
        title === 'The Bottom Line') {
      return;
    }

    if (body) {
      sections.push({
        type: 'text',
        title,
        content: markdownToHtml(body)
      });
    }
  });

  return sections;
}

// Extract Key Takeaways
function extractKeyTakeaways(content) {
  const match = content.match(/## Key Takeaways\n\n((?:- .+\n?)+)/);
  if (!match) return [];

  return match[1]
    .split('\n')
    .filter(line => line.startsWith('- '))
    .map(line => line.replace(/^- /, '').trim());
}

// Extract FAQs
function extractFaqs(content) {
  const faqSection = content.match(/## Frequently Asked Questions\n\n([\s\S]*?)(?=\n## |$)/);
  if (!faqSection) return [];

  const faqs = [];
  const parts = faqSection[1].split(/### /);

  parts.forEach(part => {
    if (!part.trim()) return;
    const lines = part.split('\n');
    const question = lines[0].trim();
    const answer = lines.slice(1).join(' ').trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  });

  return faqs;
}

// Extract Bottom Line
function extractBottomLine(content) {
  const match = content.match(/## The Bottom Line\n\n([\s\S]*?)(?=\n---|\n\*|$)/);
  if (!match) return '';
  return match[1].trim().replace(/\n/g, ' ');
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60);
}

// Calculate read time
function calculateReadTime(content) {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

// Process a single markdown file
function processFile(filePath, hubId, type = 'spoke') {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = parseFrontmatter(rawContent);

  // Extract title from first # heading
  const titleMatch = content.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.md');

  // Get first paragraph as excerpt
  const firstPara = content.match(/^# .+\n\n(.+?)(?=\n\n)/s);
  const excerpt = firstPara ? firstPara[1].substring(0, 200) + '...' : frontmatter.meta_description || '';

  const article = {
    id: frontmatter.content_id || `${hubId}-${Date.now()}`,
    title,
    slug: frontmatter.url_slug ?
      frontmatter.url_slug.replace(/^\/|\/$/g, '').split('/').pop() :
      generateSlug(title),
    hubId,
    type,
    excerpt: frontmatter.meta_description || excerpt.replace(/\n/g, ' '),
    readTime: calculateReadTime(content),
    publishDate: frontmatter.publish_date || new Date().toISOString().split('T')[0],
    author: { name: 'Wealth Authority Team', role: 'Editorial Staff' },
    primaryKeyword: frontmatter.primary_keyword || '',
    metaDescription: frontmatter.meta_description || '',
    keyTakeaways: extractKeyTakeaways(content),
    sections: extractSections(content),
    faqs: extractFaqs(content),
    bottomLine: extractBottomLine(content)
  };

  return article;
}

// Process all files in a spoke category
function processSpokeCategory(categoryName) {
  const categoryPath = path.join(OBSIDIAN_BASE, 'Spokes', categoryName);

  if (!fs.existsSync(categoryPath)) {
    console.log(`  Skipping ${categoryName} - directory not found`);
    return [];
  }

  const hubId = HUB_ID_MAP[categoryName];
  if (!hubId) {
    console.log(`  Skipping ${categoryName} - no hub ID mapping`);
    return [];
  }

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
  const articles = [];

  files.forEach(file => {
    try {
      const article = processFile(path.join(categoryPath, file), hubId, 'spoke');
      articles.push(article);
      console.log(`    ✓ ${file}`);
    } catch (err) {
      console.error(`    ✗ ${file}: ${err.message}`);
    }
  });

  return articles;
}

// Process city-specific articles
function processCityArticles() {
  const citiesPath = path.join(OBSIDIAN_BASE, 'Cities');

  if (!fs.existsSync(citiesPath)) {
    console.log('  Cities directory not found');
    return [];
  }

  const articles = [];
  const cities = fs.readdirSync(citiesPath).filter(f =>
    fs.statSync(path.join(citiesPath, f)).isDirectory()
  );

  cities.forEach(cityName => {
    const cityId = CITY_ID_MAP[cityName];
    if (!cityId) {
      console.log(`  Skipping city ${cityName} - no ID mapping`);
      return;
    }

    const cityPath = path.join(citiesPath, cityName);
    const files = fs.readdirSync(cityPath).filter(f => f.endsWith('.md'));

    files.forEach(file => {
      try {
        const article = processFile(path.join(cityPath, file), cityId, 'city-spoke');
        // Prepend city name to slug for uniqueness
        article.slug = `${article.slug}-${cityId}`;
        articles.push(article);
        console.log(`    ✓ ${cityName}/${file}`);
      } catch (err) {
        console.error(`    ✗ ${cityName}/${file}: ${err.message}`);
      }
    });
  });

  return articles;
}

// Generate TypeScript file content
function generateTypeScriptFile(articles, variableName) {
  let output = `import { Article } from '../types';\n\nexport const ${variableName}: Article[] = [\n`;

  articles.forEach((article, idx) => {
    output += '  {\n';
    output += `    id: '${article.id}',\n`;
    output += `    title: '${escapeString(article.title)}',\n`;
    output += `    slug: '${article.slug}',\n`;
    output += `    hubId: '${article.hubId}',\n`;
    output += `    type: '${article.type}',\n`;
    output += `    excerpt: '${escapeString(article.excerpt)}',\n`;
    output += `    readTime: '${article.readTime}',\n`;
    output += `    publishDate: '${article.publishDate}',\n`;
    output += `    author: { name: '${article.author.name}', role: '${article.author.role}' },\n`;

    if (article.primaryKeyword) {
      output += `    primaryKeyword: '${escapeString(article.primaryKeyword)}',\n`;
    }
    if (article.metaDescription) {
      output += `    metaDescription: '${escapeString(article.metaDescription)}',\n`;
    }

    // Key takeaways
    output += '    keyTakeaways: [\n';
    article.keyTakeaways.forEach(kt => {
      output += `      '${escapeString(kt)}',\n`;
    });
    output += '    ],\n';

    // Sections
    output += '    sections: [\n';
    article.sections.forEach(section => {
      output += '      {\n';
      output += `        type: '${section.type}',\n`;
      if (section.title) {
        output += `        title: '${escapeString(section.title)}',\n`;
      }
      if (section.content) {
        // Escape backticks for template literal
        const escapedContent = section.content
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\${/g, '\\${');
        output += '        content: `\n';
        output += escapedContent.split('\n').map(line => '          ' + line).join('\n');
        output += '\n        `\n';
      }
      output += '      },\n';
    });
    output += '    ],\n';

    // FAQs
    if (article.faqs && article.faqs.length > 0) {
      output += '    faqs: [\n';
      article.faqs.forEach(faq => {
        output += '      {\n';
        output += `        question: '${escapeString(faq.question)}',\n`;
        output += `        answer: '${escapeString(faq.answer)}'\n`;
        output += '      },\n';
      });
      output += '    ],\n';
    }

    // Bottom line
    output += `    bottomLine: '${escapeString(article.bottomLine)}'\n`;
    output += '  }' + (idx < articles.length - 1 ? ',' : '') + '\n';
  });

  output += '];\n';
  return output;
}

// Escape single quotes and other special chars for string literals
function escapeString(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, ' ')
    .replace(/\r/g, '');
}

// Main execution
async function main() {
  console.log('🚀 Obsidian to Website Content Converter\n');
  console.log('Source:', OBSIDIAN_BASE);
  console.log('Output:', OUTPUT_DIR);
  console.log('');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const allArticles = {
    retirement: [],
    'financial-planning': [],
    'find-advisor': [],
    'tax-planning': [],
    'estate-planning': [],
    investment: [],
    'high-net-worth': [],
    'risk-management': [],
    cities: []
  };

  // Process spoke categories
  console.log('📚 Processing Spoke Articles...\n');

  Object.keys(HUB_ID_MAP).forEach(categoryName => {
    console.log(`  ${categoryName}:`);
    const articles = processSpokeCategory(categoryName);
    const hubId = HUB_ID_MAP[categoryName];
    allArticles[hubId] = articles;
    console.log(`    Total: ${articles.length} articles\n`);
  });

  // Process city articles
  console.log('🏙️  Processing City Articles...\n');
  allArticles.cities = processCityArticles();
  console.log(`    Total: ${allArticles.cities.length} city articles\n`);

  // Write output files
  console.log('📝 Writing output files...\n');

  // Map of hub IDs to file names and variable names
  const fileMap = {
    'retirement': { file: 'retirementArticles.ts', var: 'RETIREMENT_ARTICLES' },
    'financial-planning': { file: 'financialPlanningArticles.ts', var: 'FINANCIAL_PLANNING_ARTICLES' },
    'find-advisor': { file: 'findAdvisorArticles.ts', var: 'FIND_ADVISOR_ARTICLES' },
    'tax-planning': { file: 'taxPlanningArticles.ts', var: 'TAX_PLANNING_ARTICLES' },
    'estate-planning': { file: 'estatePlanningArticles.ts', var: 'ESTATE_PLANNING_ARTICLES' },
    'investment': { file: 'investmentArticles.ts', var: 'INVESTMENT_ARTICLES' },
    'high-net-worth': { file: 'highNetWorthArticles.ts', var: 'HIGH_NET_WORTH_ARTICLES' },
    'risk-management': { file: 'riskManagementArticles.ts', var: 'RISK_MANAGEMENT_ARTICLES' },
    'cities': { file: 'cityArticles.ts', var: 'CITY_ARTICLES' }
  };

  Object.keys(fileMap).forEach(hubId => {
    const { file, var: varName } = fileMap[hubId];
    const articles = allArticles[hubId];

    if (articles.length > 0) {
      const content = generateTypeScriptFile(articles, varName);
      const outputPath = path.join(OUTPUT_DIR, file);
      fs.writeFileSync(outputPath, content);
      console.log(`  ✓ ${file} (${articles.length} articles)`);
    }
  });

  // Summary
  const totalArticles = Object.values(allArticles).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\n✨ Conversion complete! ${totalArticles} articles processed.\n`);
}

main().catch(console.error);
