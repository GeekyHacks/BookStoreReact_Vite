import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'under-development',
};

const catSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setUnderDevelopment: (state) => {
      state.status = 'under-development';
    },
  },
});

console.log(catSlice);

export const { setUnderDevelopment } = catSlice.actions;
export default catSlice.reducer;
