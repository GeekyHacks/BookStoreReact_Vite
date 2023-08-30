import { createSlice } from '@reduxjs/toolkit';
import CatItems from './CatItems';
const initialState = {
  catItems: CatItems,
  isLoading: true,
};

const catSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CheckStatus: (state) => {
      state.catItems;
      console.log('check status');
    },
  },
});

console.log(catSlice);

export default catSlice.reducer;
