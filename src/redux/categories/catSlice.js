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
      state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
    },
  },
});

export const { checkStatus } = catSlice.actions;
export default catSlice.reducer;
