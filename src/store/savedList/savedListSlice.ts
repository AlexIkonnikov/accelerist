import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SavedListSliceInitialState } from './types';
import {getSavedListRequest, createSavedListRequest} from './thunk';

const initialState: SavedListSliceInitialState = {
  list: [],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '',
    totalPages: 0,
    currentPage: '',
  },
  status: 'init',
}

const savedListSlice = createSlice({
  name: 'savedList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedListRequest.pending, (state) => {
      state.status = 'pending'
    });
    builder.addCase(getSavedListRequest.fulfilled, (state, {payload}) => {
      state.status = 'end'
      state.list = payload.items;
      state.meta = payload.meta;
    });

    builder.addCase(createSavedListRequest.pending, (state) => {
      console.log('save...')
    });

    builder.addCase(createSavedListRequest.fulfilled, (state) => {
      console.log('fulfilled')
    });
  },
});

export default savedListSlice.reducer;
export const savedListActions = {...savedListSlice.actions, getSavedListRequest, createSavedListRequest};
