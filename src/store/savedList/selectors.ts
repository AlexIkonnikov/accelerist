import { createSelector } from '@reduxjs/toolkit';
import { IList, SavedListSliceInitialState } from './types';
import { IMeta } from '../../types';
import { RootState } from '../store';

const selectSavedListSlice = (state: RootState): SavedListSliceInitialState => {
  return state.savedList;
};

const selectList = createSelector(
  selectSavedListSlice,
  (slice: SavedListSliceInitialState): Array<IList> => slice.list,
);

const selectMeta = createSelector(selectSavedListSlice, (slice: SavedListSliceInitialState): IMeta => slice.meta);

const selectStatus = createSelector(selectSavedListSlice, (slice: SavedListSliceInitialState): string => slice.status);

const selectListById = (id: string) =>
  createSelector(selectList, (list: Array<IList>) => {
    return list.find((item) => item.id === id);
  });

export const saveListSliceSelectors = { selectList, selectMeta, selectStatus, selectListById };
