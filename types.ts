
export interface Author {
  name: string;
  role: string;
  image?: string;
  credentials?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  type: 'text' | 'list' | 'scenario' | 'mistake' | 'steps' | 'calculator' | 'table';
  title?: string;
  content?: string;
  items?: string[]; // For lists or steps
  scenarioData?: {
    title: string;
    description: string;
    analysis: string;
  };
  mistakes?: {
    mistake: string;
    explanation: string;
  }[];
  calculatorType?: 'retirement-4-percent';
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface City {
  id: string;
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  description: string;
  image: string;
  state: string;
  stats: {
    medianHomePrice: string;
    colIndex: number;
    incomeTax: string;
  };
  localChallenges: {
    title: string;
    description: string;
  }[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export interface TopicHub {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  keyTakeaways: string[];
  expertQuote?: {
    text: string;
    author: string;
    credentials: string;
  };
  faqs: FAQItem[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  hubId: string; // references TopicHub id
  type: 'spoke' | 'city-spoke';
  excerpt: string;
  readTime: string;
  author: Author;
  reviewer?: Author;
  publishDate: string;
  keyTakeaways: string[];
  sections: ContentSection[];
  faqs?: FAQItem[];
  bottomLine: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  assets: string;
  timeline: string;
}