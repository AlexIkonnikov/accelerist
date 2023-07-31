import { createSelector } from '@reduxjs/toolkit';
import { UserInitialState } from './types';
import { RootState } from '../store';

const selectUserSlice = (state: RootState): UserInitialState => {
  return state.user;
};

const selectUserToken = createSelector(selectUserSlice, (user: UserInitialState) => user.accessToken);
const selectStatus = createSelector(selectUserSlice, (user: UserInitialState) => user.status);

export const userSliceSelectors = { selectUserToken, selectStatus };
