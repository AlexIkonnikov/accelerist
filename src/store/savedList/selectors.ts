import { createSelector } from '@reduxjs/toolkit';
import { IList, IMeta, SavedListSliceInitialState } from './types';
import { RootState } from '../store';

const savedListSlice = (state: RootState): SavedListSliceInitialState => {
  return state.savedList;
};

const selectList = createSelector(savedListSlice, (slice: SavedListSliceInitialState): Array<IList> => slice.list);

const selectMeta = createSelector(savedListSlice, (slice: SavedListSliceInitialState): IMeta => slice.meta);

const selectStatus = createSelector(savedListSlice, (slice: SavedListSliceInitialState): string => slice.status);

export const saveListSliceSelectors = { selectList, selectMeta, selectStatus };
