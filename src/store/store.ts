import { configureStore, EnhancedStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { companyReducer } from './company';
import { savedListReducer } from './savedList';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
  savedList: savedListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = EnhancedStore<RootState>;
export type AppDispatch = typeof store.dispatch;
