import { createSelector } from '@reduxjs/toolkit';
import { CompanySliceInitialState, IFilters } from './types';
import { RootState } from '../store';

const companySlice = (state: RootState): CompanySliceInitialState => {
  return state.company;
};

const selectFilters = createSelector(companySlice, (company: CompanySliceInitialState): IFilters => company.filters);

export const companySliceSelectors = { selectFilters };
