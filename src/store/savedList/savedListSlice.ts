import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SavedListSliceInitialState } from './types';

const initialState: SavedListSliceInitialState = {
  list: [],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '',
    totalPages: 0,
    currentPage: '',
  }
}

const savedListSlice = createSlice({
  name: 'savedList',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default savedListSlice.reducer;
