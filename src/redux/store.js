import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import catReducer from './categories/catSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: catReducer,
  },
});
