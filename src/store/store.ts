import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user';

const RootReducer = combineReducers({
  user: userReducer
})

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
