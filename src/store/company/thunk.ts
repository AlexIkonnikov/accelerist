import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchCompanyResponse } from './types';
import { getCompanies, getFavoritesCompany } from './../../services/api';
import { ParsedQuery } from 'query-string';

export const getCompaniesRequest = createAsyncThunk<SearchCompanyResponse, ParsedQuery<string | number>>(
  'company/getCompaniesRequest',
  async (query: ParsedQuery<string | number>) => {
    const response = await getCompanies(query);
    return response.data;
  },
);

export const getFavoritesCompanyRequest = createAsyncThunk<SearchCompanyResponse, ParsedQuery<string | number>>(
  'company/getFavoritesCompanyRequest',
  async (query: ParsedQuery<string | number>) => {
    const response = await getFavoritesCompany(query);
    return response.data;
  },
);
