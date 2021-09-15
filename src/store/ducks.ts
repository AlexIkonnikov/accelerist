import * as user from './user';
import * as company from './company';

export const actions = {
  user: user.userSliceActions,
  company: company.companySliceActions
}

export const selectors = {
  user: user.userSliceSelectors,
  company: company.companySliceSelectors
}

