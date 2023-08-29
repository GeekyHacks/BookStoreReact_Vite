import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItem: [],
  isLoading: true,
};

const bookSlice = createSlice({ name: 'books', initialState });

console.log(bookSlice);

export default bookSlice.reducer;
