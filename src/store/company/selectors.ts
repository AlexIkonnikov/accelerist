import { createSelector } from '@reduxjs/toolkit';
import { CompanySliceInitialState, ICompany } from './types';
import { IMeta } from '../../types';
import { RootState } from '../store';

const selectCompanySlice = (state: RootState): CompanySliceInitialState => {
  return state.company;
};

const selectCompany = createSelector(
  selectCompanySlice,
  (company: CompanySliceInitialState): Array<ICompany> => company.company,
);
const selectMeta = createSelector(selectCompanySlice, (company: CompanySliceInitialState): IMeta => company.meta);
const selectStatus = createSelector(selectCompanySlice, (company: CompanySliceInitialState) => company.status);

export const companySliceSelectors = { selectCompany, selectMeta, selectStatus };
