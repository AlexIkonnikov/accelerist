import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCompaniesRequest, getFavoritesCompanyRequest } from './thunk';
import { CompanySliceInitialState } from './types';

const initialState: CompanySliceInitialState = {
  company: [],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '',
    totalPages: 0,
    currentPage: '1',
  },
  status: 'init'
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCompaniesRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getCompaniesRequest.fulfilled, (state, {payload}) => {
      state.status = 'end';
      state.company = payload.items;
      state.meta = payload.meta;
    });

    builder.addCase(getFavoritesCompanyRequest.pending, (state) => {
      state.status = 'pending';
      state.company = [];
    });
    builder.addCase(getFavoritesCompanyRequest.fulfilled, (state, {payload}) => {
      state.company = payload.items;
      state.meta = payload.meta;
      state.status = 'end';
    });
  }
});

export default companySlice.reducer;
export const companySliceActions = {...companySlice.actions, getCompaniesRequest, getFavoritesCompanyRequest};
