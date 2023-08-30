import { createSlice } from '@reduxjs/toolkit';
import BookItems from './BookItems';
import BookItem from './BookItem';

const initialState = {
  bookItems: BookItems,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddItem: (state) => {
      state.bookItems = BookItems.push(BookItem);
      console.log('Item Added');
    },
    RemoveItem: (state) => {
      state.bookItems = BookItems.pop(BookItem);
      console.log('Item removed');
    },
  },
});

console.log(bookSlice);

export default bookSlice.reducer;
