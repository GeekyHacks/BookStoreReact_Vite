import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import booksReducer from './books/bookSlice';
import catReducer from './categories/catSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    categories: catReducer,
  },
});
