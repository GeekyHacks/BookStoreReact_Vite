import { createSlice } from '@reduxjs/toolkit';
import CatItems from './CatItems';

const initialState = {
  categories: CatItems,
};

const catSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      // Update categories only if payload is 'Under construction'
      state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
    },
  },
});

export const { checkStatus } = catSlice.actions;
// this goes to the store to make use it anywhere in the app
export default catSlice.reducer;
