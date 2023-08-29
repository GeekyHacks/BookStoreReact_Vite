import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import booksReducer from './books/bookSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
});
