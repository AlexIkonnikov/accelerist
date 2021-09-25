import { createSlice } from '@reduxjs/toolkit';
import { SavedListSliceInitialState } from './types';
import { getSavedListRequest } from './operations';
import toast from './../../utils/Toaster';

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
    builder.addCase(getSavedListRequest.rejected, (state) => {
      toast.error('Server side error. Please try again later.');
      state.status = 'end';
    });
    builder.addCase(getSavedListRequest.fulfilled, (state, { payload }) => {
      state.list = payload.items;
      state.meta = payload.meta;
      state.status = 'end';
    });
  },
});

export default savedListSlice.reducer;
export const savedListActions = { ...savedListSlice.actions, getSavedListRequest };
