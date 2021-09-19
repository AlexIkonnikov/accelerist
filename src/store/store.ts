import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { companyReducer } from './company';
import { savedListReducer } from './savedList';

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
    savedList: savedListReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = EnhancedStore<RootState>;
export type AppDispatch = typeof store.dispatch;
