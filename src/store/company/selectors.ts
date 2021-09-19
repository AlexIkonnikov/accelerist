import { createSelector } from '@reduxjs/toolkit';
import { CompanySliceInitialState, ICompany, IMeta } from './types';
import { RootState } from '../store';

const companySlice = (state: RootState): CompanySliceInitialState => {
  return state.company;
};

const selectCompany = createSelector(
  companySlice,
  (company: CompanySliceInitialState): Array<ICompany> => company.company,
);
const selectMeta = createSelector(companySlice, (company: CompanySliceInitialState): IMeta => company.meta);
const selectStatus = createSelector(companySlice, (company: CompanySliceInitialState) => company.status);

export const companySliceSelectors = { selectCompany, selectMeta, selectStatus };
