import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchCompanyResponse } from './types';
import { getCompanies } from './../../services/api';

export const getCompaniesRequest = createAsyncThunk<SearchCompanyResponse, string>(
  'company/getCompaniesRequest',
  async (query: string) => {
    const response = await getCompanies(query);
    return response.data;
  },
);
