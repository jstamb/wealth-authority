import { HUBS, CITIES, MOCK_ARTICLES } from '../constants';
import { HOMEPAGE_CONTENT } from '../data/homepage';
import { STATIC_PAGE_SEO } from '../data/staticPages';
import { TopicHub, Article, City, FAQItem } from '../types';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.wealthauthority.org';

// Same order the app uses. First slug wins, matching ArticlePage.find().
const ALL_ARTICLES: Article[] = MOCK_ARTICLES;

interface SchemaData {
  hubs: Record<string, string>;
  articles: Record<string, string>;
  cities: Record<string, string>;
}

function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.replace(/^###\s*/, ''),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function generateHubSchema(hub: TopicHub, articles: Article[]): string {
  const hubArticles = articles.filter((a) => a.hubId === hub.id);

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hub.title,
    description: hub.description,
    url: `${BASE_URL}/hub/${hub.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Wealth Authority',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.svg`,
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: `${hub.title} Guides`,
      numberOfItems: hubArticles.length,
      itemListElement: hubArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}/article/${article.slug}`,
        name: article.title,
      })),
    },
    about: {
      '@type': 'Thing',
      name: hub.title,
      description: hub.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Wealth Authority',
      url: BASE_URL,
    },
  };

  const schemas = [collectionPageSchema];

  if (hub.faqs && hub.faqs.length > 0) {
    schemas.push(generateFAQSchema(hub.faqs) as any);
  }

  return schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
}

function generateArticleSchema(article: Article): string {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      ...(article.author.credentials && {
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: article.author.credentials,
        },
      }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wealth Authority',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.svg`,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.lastUpdated || article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/article/${article.slug}`,
    },
  };

  const schemas = [articleSchema];

  if (article.faqs && article.faqs.length > 0) {
    schemas.push(generateFAQSchema(article.faqs) as any);
  }

  return schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
}

function generateCitySchema(city: City): string {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Wealth Management Services in ${city.name}`,
    description: `Connect with top-rated fiduciary wealth managers in ${city.name}, ${city.state}. Expert guidance for retirement, tax planning, and estate preservation.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state,
      },
    },
    serviceType: 'Wealth Management',
    provider: {
      '@type': 'Organization',
      name: 'Wealth Authority',
    },
  };

  const schemas = [localBusinessSchema];

  if (city.faqs && city.faqs.length > 0) {
    schemas.push(generateFAQSchema(city.faqs) as any);
  }

  return schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
}

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cityDescription(city: City): string {
  return `Find top fiduciary wealth managers in ${city.name}, ${city.state}. ${city.description}`.slice(0, 158);
}

function isoDate(value?: string): string {
  if (value && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  return '2026-11-07';
}

function main() {
  const schemaData: SchemaData = {
    hubs: {},
    articles: {},
    cities: {},
  };
  const routes: Record<string, { title: string; description: string; canonical: string }> = {
    '/': {
      title: HOMEPAGE_CONTENT.metaTitle,
      description: HOMEPAGE_CONTENT.metaDescription,
      canonical: `${BASE_URL}/`,
    },
  };

  for (const [route, seo] of Object.entries(STATIC_PAGE_SEO)) {
    routes[route] = {
      title: seo.title,
      description: seo.description,
      canonical: `${BASE_URL}${route}`,
    };
  }

  for (const hub of HUBS) {
    if (!schemaData.hubs[hub.slug]) {
      schemaData.hubs[hub.slug] = generateHubSchema(hub, ALL_ARTICLES);
    }
    const route = `/hub/${hub.slug}`;
    routes[route] = {
      title: `${hub.title} | Wealth Authority`,
      description: hub.description,
      canonical: `${BASE_URL}${route}`,
    };
  }

  let skippedDuplicates = 0;
  for (const article of ALL_ARTICLES) {
    if (schemaData.articles[article.slug]) {
      skippedDuplicates += 1;
      continue;
    }
    schemaData.articles[article.slug] = generateArticleSchema(article);
    const route = `/article/${article.slug}`;
    routes[route] = {
      title: `${article.title} | Wealth Authority`,
      description: article.metaDescription || article.excerpt,
      canonical: `${BASE_URL}${route}`,
    };
  }

  for (const city of CITIES) {
    if (!schemaData.cities[city.slug]) {
      schemaData.cities[city.slug] = generateCitySchema(city);
    }
    const route = `/city/${city.slug}`;
    routes[route] = {
      title: `Wealth Management in ${city.name}, ${city.state} | Wealth Authority`,
      description: cityDescription(city),
      canonical: `${BASE_URL}${route}`,
    };
  }

  const distDir = path.join(__dirname, '../dist');
  fs.mkdirSync(distDir, { recursive: true });
  const outputPath = path.join(distDir, 'schema-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(schemaData, null, 2));
  fs.writeFileSync(path.join(distDir, 'route-meta.json'), JSON.stringify({ routes }, null, 2));

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    { loc: `${BASE_URL}/`, lastmod: '2026-11-07', changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/find-advisor`, lastmod: '2026-11-07', changefreq: 'monthly', priority: '0.9' },
    { loc: `${BASE_URL}/strategies`, lastmod: '2026-11-07', changefreq: 'weekly', priority: '0.8' },
    { loc: `${BASE_URL}/cities`, lastmod: '2026-11-07', changefreq: 'weekly', priority: '0.8' },
  ];
  const seen = new Set(urls.map((item) => item.loc));
  for (const hub of HUBS) {
    const loc = `${BASE_URL}/hub/${hub.slug}`;
    if (seen.has(loc)) continue;
    seen.add(loc);
    urls.push({ loc, lastmod: '2026-11-07', changefreq: 'weekly', priority: '0.8' });
  }
  for (const article of ALL_ARTICLES) {
    const loc = `${BASE_URL}/article/${article.slug}`;
    if (seen.has(loc)) continue;
    seen.add(loc);
    urls.push({
      loc,
      lastmod: isoDate(article.lastUpdated || article.publishDate),
      changefreq: 'monthly',
      priority: '0.7',
    });
  }
  for (const city of CITIES) {
    const loc = `${BASE_URL}/city/${city.slug}`;
    if (seen.has(loc)) continue;
    seen.add(loc);
    urls.push({ loc, lastmod: '2026-11-07', changefreq: 'monthly', priority: '0.6' });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((item) => `  <url>
    <loc>${xmlEscape(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

  console.log(`Schema data written to ${outputPath}`);
  console.log(`  - ${Object.keys(schemaData.hubs).length} hub pages`);
  console.log(`  - ${Object.keys(schemaData.articles).length} article pages`);
  console.log(`  - ${Object.keys(schemaData.cities).length} city pages`);
  console.log(`  - ${Object.keys(routes).length} route meta entries`);
  console.log(`  - ${urls.length} sitemap URLs`);
  console.log(`  - skipped ${skippedDuplicates} duplicate article slugs`);
}

main();
