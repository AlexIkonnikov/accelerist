import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = EnhancedStore<RootState>;
export type AppDispatch = typeof store.dispatch;
