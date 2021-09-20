import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateSavedListPayload, GetSavedListResponse } from './types';
import { createSavedList, getSavedList } from '../../services/api';

export const getSavedListRequest = createAsyncThunk<GetSavedListResponse, string>(
  'savedList/getSavedListRequest',
  async (query: string) => {
    const response = await getSavedList(query);
    return response.data;
  },
);

export const createSavedListRequest = createAsyncThunk(
  'savedList/createSavedListRequest',
  async (data: CreateSavedListPayload) => {
    const response = await createSavedList(data);
    return response.data;
  }
)
