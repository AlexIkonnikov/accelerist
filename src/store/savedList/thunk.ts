import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateSavedListPayload, GetSavedListResponse } from './types';
import { createSavedList, getSavedList } from '../../services/api';
import { setQueryParams } from '../../utils/queryParams';

export const getSavedListRequest = createAsyncThunk<GetSavedListResponse, string>(
  'savedList/getSavedListRequest',
  async (query: string) => {
    setQueryParams(query);
    const response = await getSavedList(query);
    return response.data;
  },
);
