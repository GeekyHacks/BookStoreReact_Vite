import { createSlice } from '@reduxjs/toolkit';
import BookItems from './BookItems';
const initialState = {
  bookItems: BookItems,
};

// createSlice simplify the initial data editing and updating using reducers and actions
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    //the addBook&removeBook functions will be used as an action creator.
    // When this action is dispatched, it will contain a payload property
    //that I can use to pass data to the reducer.
    addBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      // note the must use the same logic when handing the remove button
      state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    },
  },
});

console.log(bookSlice);

// after creating reducers and actions you need to export them to use them in any component
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

// the payload is actually the data that's dispatched from a bookform to be used
