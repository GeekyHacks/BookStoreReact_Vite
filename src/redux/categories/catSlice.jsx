import { createSlice } from '@reduxjs/toolkit';
import CatItems from './CatItems';
import CatItem from './CatItem';
const initialState = {
  catItems: CatItems,
  isLoading: true,
};

const catSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CheckStatus: (state) => {
      state.catItems = CatItems.push(CatItem);
      console.log('Item Added');
    },
  },
});

console.log(catSlice);

export default catSlice.reducer;
