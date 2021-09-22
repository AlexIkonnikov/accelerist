import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetSavedListResponse } from './types';
import { getSavedList } from '../../services/api';
import { ParsedQuery } from 'query-string';

export const getSavedListRequest = createAsyncThunk<GetSavedListResponse, ParsedQuery<string | number>>(
  'savedList/getSavedListRequest',
  async (query: ParsedQuery<string | number>) => {
    const response = await getSavedList(query);
    return response.data;
  },
);
