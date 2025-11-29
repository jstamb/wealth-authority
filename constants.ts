
import {
  MOCK_ARTICLES as ORIGINAL_ARTICLES,
  HUBS,
  ASSET_RANGES,
  TIMELINES
} from './constants-original';

import { CITIES } from './data/cities';

import { RETIREMENT_ARTICLES } from './data/retirementArticles';
import { FINANCIAL_PLANNING_ARTICLES } from './data/financialPlanningArticles';
import { FIND_ADVISOR_ARTICLES } from './data/findAdvisorArticles';
import { ESTATE_ARTICLES } from './data/estateArticles';
import { HIGH_NET_WORTH_ARTICLES } from './data/highNetWorthArticles';
import { INVESTMENT_ARTICLES } from './data/investmentArticles';
import { TAX_ARTICLES } from './data/taxArticles';
import { RISK_ARTICLES } from './data/riskManagementArticles';
import { CITY_ARTICLES } from './data/cityArticles';

export { HUBS, ASSET_RANGES, TIMELINES } from './constants-original';
export { CITIES } from './data/cities';

export const MOCK_ARTICLES = [
  ...RETIREMENT_ARTICLES,
  ...FINANCIAL_PLANNING_ARTICLES,
  ...FIND_ADVISOR_ARTICLES,
  ...ESTATE_ARTICLES,
  ...HIGH_NET_WORTH_ARTICLES,
  ...INVESTMENT_ARTICLES,
  ...TAX_ARTICLES,
  ...RISK_ARTICLES,
  ...CITY_ARTICLES
];
