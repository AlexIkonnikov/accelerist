import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IList, SavedListSliceInitialState } from './types';
import {
  getSavedListRequest,
  updateSavedListRequest,
  deleteSavedListRequest,
} from './operations';
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
  reducers: {
    addList(state, {payload}: PayloadAction<IList>) {
      state.list.push(payload);
    }
  },
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

    builder.addCase(updateSavedListRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(updateSavedListRequest.rejected, (state) => {
      state.status = 'end';
      toast.error('Server side error. Please try again later.');
    });
    builder.addCase(updateSavedListRequest.fulfilled, (state, { payload }) => {
      const idx = state.list.findIndex((item) => item.id === payload.id);
      toast.success(`Name changed from ${state.list[idx].name} to ${payload.name}`);
      state.list[idx] = payload;
      state.status = 'end';
    });

    builder.addCase(deleteSavedListRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(deleteSavedListRequest.rejected, (state) => {
      state.status = 'end';
      toast.error('Server side error. Please try again later.');
    });
    builder.addCase(deleteSavedListRequest.fulfilled, (state, { payload }) => {
      const idx = state.list.findIndex((item) => item.id === payload);
      const removed = state.list.splice(idx, 1);
      state.status = 'end';
      toast.info(`List "${removed[0].name}" has been removed`);
    });

  },
});

export default savedListSlice.reducer;
export const savedListActions = {
  ...savedListSlice.actions,
  getSavedListRequest,
  updateSavedListRequest,
  deleteSavedListRequest,
};
