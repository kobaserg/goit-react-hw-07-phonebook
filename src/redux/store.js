import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
