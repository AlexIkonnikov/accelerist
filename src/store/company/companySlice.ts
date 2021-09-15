import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCompaniesRequest } from './thunk';
import { CompanySliceInitialState, IFilters } from './types';

const initialState: CompanySliceInitialState = {
  filters: { page: 1, limit: 12 },
  company: []
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setFilters(state, {payload}) {
      console.log('test')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCompaniesRequest.fulfilled, (state, {payload}) => {
      state.company = payload.items;
    });
  }
});

export default companySlice.reducer;
export const companySliceActions = {...companySlice.actions, getCompaniesRequest};
