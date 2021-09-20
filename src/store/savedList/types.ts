import { IUser } from '../user';

export interface IFilters {
  sdgGoals?: Array<string>;
  income?: Array<string>;
  ageRanges?: Array<string>;
  gender?: 'male' | 'female' | 'both';
  q?: string;
  revenueMin?: number;
  revenueMax?: number;
}

export interface IList {
  id: string;
  filters: IFilters;
  name: string | null;
  prospectsAvailable: number;
  createdAt: string;
  updatedAt: string;
  lastAuthor: IUser;
}

export interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}

export interface SavedListSliceInitialState {
  list: Array<IList>;
  meta: IMeta;
  status: 'init' | 'pending' | 'end';
}

export interface GetSavedListResponse {
  items: Array<IList>;
  meta: IMeta;
}

export interface CreateSavedListPayload {
  filters: IFilters
}
