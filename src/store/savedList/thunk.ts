import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetSavedListResponse } from './types';
import { getSavedList } from '../../services/api';

export const getSavedListRequest = createAsyncThunk<GetSavedListResponse, string>(
  'savedList/getSavedListRequest',
  async (query: string) => {
    const response = await getSavedList(query);
    return response.data;
  },
);
