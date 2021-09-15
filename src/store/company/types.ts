
export interface IFilters {
  page: number;
  limit: number;
  sdgGoals?: Array<string>;
  income?: Array<string>;
  ageRanges?: Array<string>;
  gender?: 'male' | 'female' | 'both';
  q?: string;
  revenueMin?: number;
  revenueMax?: number;
}

export interface ICompany {
  id: string;
  zoomInfoId: null;
  name: string;
  logo: null;
  ticker: null;
  parentCompany: null;
  phone: string;
  fax: string | null;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent: null;
  productsBrandDescription: null;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle: null;
  socialMediaUrls: null;
  competitors: null;
  subUnitIndustries: null;
  primaryIndustry: Array<string>;
  industries: null;
  revenue: string;
  employeeCount: number;
  annualContributions: null;
  cashContributions: null;
  inKindContributions: null;
  employeeContributions: null;
  parentId: null;
  parentName: null;
  type: null;
  sdgGoals: Array<string>;
  genders: null;
  income: null;
  age: null;
  ethnicity: null;
  nonprofit: null;
  purchase: null;
  affiliation: null;
  brands: null;
  interests: null;
  typesOfInvestment: null;
  errorLoadZoomInfo: null;
  charitablePartners: [];
  statusZoomInfo: string;
  loadZoomInfoDate: null;
  errorLoadZoomInfoDate: null;
  partnershipLink: null;
  employeeEngagementOpportunities: boolean;
  similarCompanies: Array<string>;
  favoriteCompanies: Array<string>;
  score: number;
  like: boolean;
  crsFocus: Array<string>;
}

export interface CompanySliceInitialState {
  filters: IFilters;
  company: Array<ICompany | []>;
}

export interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}

export interface SearchCompanyResponse {
  items: Array<ICompany>;
  meta: IMeta;
}
