import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchCompanyResponse } from './types';
import { getCompanies, getFavoritesCompany } from './../../services/api';

export const getCompaniesRequest = createAsyncThunk<SearchCompanyResponse, string>(
  'company/getCompaniesRequest',
  async (query: string) => {
    const response = await getCompanies(query);
    return response.data;
  },
);

export const getFavoritesCompanyRequest = createAsyncThunk<SearchCompanyResponse, string>(
  'company/getFavoritesCompanyRequest',
  async (query: string) => {
    const response = await getFavoritesCompany(query);
    return response.data;
  }
);
