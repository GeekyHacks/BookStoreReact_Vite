import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import BookItems from './BookItems';
import axios from 'axios';

const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WluyIk7BUwsnpiFriH9k/books/';

const initialState = {
  bookItems: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (_) => {
  try {
    // console.log(thunkAPI);
    const resp = await axios.get(apiUrl);
    // to fetch data from API with the desired format
    const transformedBooks = Object.keys(resp.data).map((key) => {
      const bookData = resp.data[key][0];
      return {
        item_id: key,
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      };
    });

    console.log(transformedBooks);
    return transformedBooks;
  } catch (error) {}
});


export const postBooks = createAsyncThunk('books/postBooks', async (book) => {
  try {
    const resp = await axios.post(apiUrl, book);

    console.log(resp);
    return resp.data;
  } catch (error) {}
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const resp = await axios.delete(`${apiUrl}${id}`);

    console.log(resp);
    return resp.data;
  } catch (error) {}
});


const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.bookItems = action.payload;
        console.log(action.payload);
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);

        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(postBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        // Assuming the response contains the added book data
        state.bookItems.push(action.payload);
      })
      .addCase(postBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        // Assuming the response contains the added book data
        state.bookItems.push(action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;

export const { addBook } = bookSlice.actions;

