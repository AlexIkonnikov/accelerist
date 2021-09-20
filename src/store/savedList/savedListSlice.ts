import { createSlice } from '@reduxjs/toolkit';
import { SavedListSliceInitialState } from './types';
import { getSavedListRequest } from './thunk';

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
};

const savedListSlice = createSlice({
  name: 'savedList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedListRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getSavedListRequest.fulfilled, (state, { payload }) => {
      state.status = 'end';
      state.list = payload.items;
      state.meta = payload.meta;
    });
  },
});

export default savedListSlice.reducer;
export const savedListActions = { ...savedListSlice.actions, getSavedListRequest };
