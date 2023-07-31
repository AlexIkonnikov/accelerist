import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSavedList, updateSavedList, deleteSavedList } from '../../services/api';
import { ParsedQuery } from 'query-string';
import { IList } from './types';

export const getSavedListRequest = createAsyncThunk(
  'savedList/getSavedListRequest',
  async (query: ParsedQuery<string | number | undefined>) => {
    const response = await getSavedList(query);
    return response.data;
  },
);

export const updateSavedListRequest = createAsyncThunk('savedList/updateSavedListRequest', async (data: IList) => {
  const response = await updateSavedList(data);
  return response.data;
});

export const deleteSavedListRequest = createAsyncThunk('savedList/deleteSavedListRequest', async (id: string) => {
  await deleteSavedList(id);
  return id;
});
