import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSavedList } from '../../services/api';
import { ParsedQuery } from 'query-string';

export const getSavedListRequest = createAsyncThunk(
  'savedList/getSavedListRequest',
  async (query: ParsedQuery<string | number| undefined>) => {
    const response = await getSavedList(query);
    return response.data;
  },
);
