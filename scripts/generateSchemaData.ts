import { SYNCED_HUBS } from '../data/hubs';
import { SYNCED_CITIES } from '../data/cityHubs';
import { RETIREMENT_ARTICLES } from '../data/retirementArticles';
import { FINANCIALPLANNING_ARTICLES } from '../data/financialPlanningArticles';
import { FINDADVISOR_ARTICLES } from '../data/findAdvisorArticles';
import { TAXPLANNING_ARTICLES } from '../data/taxPlanningArticles';
import { ESTATEPLANNING_ARTICLES } from '../data/estatePlanningArticles';
import { INVESTMENT_ARTICLES } from '../data/investmentArticles';
import { HIGHNETWORTH_ARTICLES } from '../data/highNetWorthArticles';
import { RISKMANAGEMENT_ARTICLES } from '../data/riskManagementArticles';
import { CITY_ARTICLES } from '../data/cityArticles';
import { TopicHub, Article, City, FAQItem } from '../types';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.wealthauthority.org';

// Combine all articles
const ALL_ARTICLES: Article[] = [
  ...RETIREMENT_ARTICLES,
  ...FINANCIALPLANNING_ARTICLES,
  ...FINDADVISOR_ARTICLES,
  ...TAXPLANNING_ARTICLES,
  ...ESTATEPLANNING_ARTICLES,
  ...INVESTMENT_ARTICLES,
  ...HIGHNETWORTH_ARTICLES,
  ...RISKMANAGEMENT_ARTICLES,
  ...CITY_ARTICLES,
];

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
        url: `${BASE_URL}/logo.png`,
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
        url: `${BASE_URL}/logo.png`,
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

function main() {
  const schemaData: SchemaData = {
    hubs: {},
    articles: {},
    cities: {},
  };

  // Generate hub schemas
  for (const hub of SYNCED_HUBS) {
    schemaData.hubs[hub.slug] = generateHubSchema(hub, ALL_ARTICLES);
  }

  // Generate article schemas
  for (const article of ALL_ARTICLES) {
    schemaData.articles[article.slug] = generateArticleSchema(article);
  }

  // Generate city schemas
  for (const city of SYNCED_CITIES) {
    schemaData.cities[city.slug] = generateCitySchema(city);
  }

  // Write to dist folder
  const outputPath = path.join(__dirname, '../dist/schema-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(schemaData, null, 2));
  console.log(`Schema data written to ${outputPath}`);
  console.log(`  - ${Object.keys(schemaData.hubs).length} hub pages`);
  console.log(`  - ${Object.keys(schemaData.articles).length} article pages`);
  console.log(`  - ${Object.keys(schemaData.cities).length} city pages`);
}

main();
