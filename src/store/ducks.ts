import * as user from './user';
import * as company from './company';
import * as saveList from './savedList';

export const actions = {
  user: user.userSliceActions,
  company: company.companySliceActions,
  saveList: saveList.savedListActions,
};

export const selectors = {
  user: user.userSliceSelectors,
  company: company.companySliceSelectors,
  saveList: saveList.saveListSliceSelectors,
};
