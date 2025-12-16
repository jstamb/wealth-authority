import React from 'react';
import { Article, FAQItem, Author, TopicHub } from '../types';

interface ArticleSchemaProps {
  type: 'article';
  title: string;
  description: string;
  author: Author;
  publishDate: string;
  lastUpdated?: string;
  url: string;
}

interface FAQSchemaProps {
  type: 'faq';
  faqs: FAQItem[];
}

interface BreadcrumbSchemaProps {
  type: 'breadcrumb';
  items: { name: string; url: string }[];
}

interface OrganizationSchemaProps {
  type: 'organization';
}

interface LocalBusinessSchemaProps {
  type: 'localBusiness';
  cityName: string;
  stateName: string;
}

interface PillarPageSchemaProps {
  type: 'pillarPage';
  hub: TopicHub;
  articles: { title: string; slug: string; excerpt: string }[];
}

type SchemaProps =
  | ArticleSchemaProps
  | FAQSchemaProps
  | BreadcrumbSchemaProps
  | OrganizationSchemaProps
  | LocalBusinessSchemaProps
  | PillarPageSchemaProps;

const SchemaMarkup: React.FC<SchemaProps> = (props) => {
  let schema: Record<string, any>;

  switch (props.type) {
    case 'article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.title,
        description: props.description,
        author: {
          '@type': 'Person',
          name: props.author.name,
          jobTitle: props.author.role,
          ...(props.author.credentials && {
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: props.author.credentials
            }
          })
        },
        publisher: {
          '@type': 'Organization',
          name: 'Wealth Authority',
          url: 'https://www.wealthauthority.org',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.wealthauthority.org/logo.png'
          }
        },
        datePublished: props.publishDate,
        dateModified: props.lastUpdated || props.publishDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': props.url
        }
      };
      break;

    case 'faq':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      break;

    case 'breadcrumb':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `https://www.wealthauthority.org${item.url}`
        }))
      };
      break;

    case 'organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Wealth Authority',
        url: 'https://www.wealthauthority.org',
        logo: 'https://www.wealthauthority.org/logo.png',
        description: 'Connect with America\'s top-rated fiduciary wealth managers. Expert guidance for retirement, tax planning, and estate preservation.',
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'English'
        }
      };
      break;

    case 'localBusiness':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: `Wealth Management Services in ${props.cityName}`,
        description: `Connect with top-rated fiduciary wealth managers in ${props.cityName}, ${props.stateName}. Expert guidance for retirement, tax planning, and estate preservation.`,
        areaServed: {
          '@type': 'City',
          name: props.cityName,
          containedInPlace: {
            '@type': 'State',
            name: props.stateName
          }
        },
        serviceType: 'Wealth Management',
        provider: {
          '@type': 'Organization',
          name: 'Wealth Authority'
        }
      };
      break;

    case 'pillarPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: props.hub.title,
        description: props.hub.description,
        url: `https://www.wealthauthority.org/hub/${props.hub.slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'Wealth Authority',
          url: 'https://www.wealthauthority.org',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.wealthauthority.org/logo.png'
          }
        },
        mainEntity: {
          '@type': 'ItemList',
          name: `${props.hub.title} Guides`,
          numberOfItems: props.articles.length,
          itemListElement: props.articles.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://www.wealthauthority.org/article/${article.slug}`,
            name: article.title
          }))
        },
        about: {
          '@type': 'Thing',
          name: props.hub.title,
          description: props.hub.description
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'Wealth Authority',
          url: 'https://www.wealthauthority.org'
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
