import { createSlice } from '@reduxjs/toolkit';
import { getCompaniesRequest, getFavoritesCompanyRequest } from './operations';
import { CompanySliceInitialState } from './types';
import toast from './../../utils/Toaster';

const initialState: CompanySliceInitialState = {
  company: [],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '',
    totalPages: 0,
    currentPage: '1',
  },
  status: 'init',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompaniesRequest.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getCompaniesRequest.rejected, (state) => {
      toast.error('Server side error. Please try again later.');
      state.status = 'end';
    });
    builder.addCase(getCompaniesRequest.fulfilled, (state, { payload }) => {
      state.status = 'end';
      state.company = payload.items;
      state.meta = payload.meta;
    });

    builder.addCase(getFavoritesCompanyRequest.pending, (state) => {
      state.status = 'pending';
      state.company = [];
    });
    builder.addCase(getFavoritesCompanyRequest.rejected, (state) => {
      state.status = 'end';
      toast.error('Server side error. Please try again later.');
    });
    builder.addCase(getFavoritesCompanyRequest.fulfilled, (state, { payload }) => {
      state.company = payload.items;
      state.meta = payload.meta;
      state.status = 'end';
    });
  },
});

export default companySlice.reducer;
export const companySliceActions = { ...companySlice.actions, getCompaniesRequest, getFavoritesCompanyRequest };
