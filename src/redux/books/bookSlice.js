import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookItems from './BookItems';

const initialState = {
  bookItems: BookItems,
};

export const getBooks = createAsyncThunk('books/getBooks', () => {
  return fetch()
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: {},
});

console.log(bookSlice);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
