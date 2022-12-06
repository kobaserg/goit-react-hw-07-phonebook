import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './phonebookSlice';
import { persistStore } from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    });
  },
});

export const persistor = persistStore(store);
