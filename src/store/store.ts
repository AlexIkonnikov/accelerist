import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { companyReducer } from './company';

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = EnhancedStore<RootState>;
export type AppDispatch = typeof store.dispatch;
