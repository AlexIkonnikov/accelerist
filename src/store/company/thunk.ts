import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCompanies, getFavoritesCompany } from './../../services/api';
import { ParsedQuery } from 'query-string';

export const getCompaniesRequest = createAsyncThunk(
  'company/getCompaniesRequest',
  async (query: ParsedQuery<string | number| undefined>) => {
    const response = await getCompanies(query);
    return response.data;
  },
);

export const getFavoritesCompanyRequest = createAsyncThunk(
  'company/getFavoritesCompanyRequest',
  async (query: ParsedQuery<string | number| undefined>) => {
    const response = await getFavoritesCompany(query);
    return response.data;
  },
);
