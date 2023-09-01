import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import BookItems from './BookItems';
import axios from 'axios';

const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WluyIk7BUwsnpiFriH9k/books/';

const initialState = {
  bookItems: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
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

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   state.bookItems.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    // },
  },
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
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// // import BookItems from './BookItems';
// // import axios from 'axios';

// const apiUrl =
//   'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3bZffh6B3PamZYZsiiPs/books/';
// const initialState = {
//   bookItems: [],
//   isLoading: false,
// };

// export const getBooks = createAsyncThunk('books/getBooks', async () => {
//   return await fetch(apiUrl)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// });

// const bookSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => {
//       state.bookItems.push(action.payload);
//     },
//     removeBook: (state, action) => {
//       state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getBooks.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getBooks.fulfilled, (state, action) => {
//         console.log(action);
//         state.isLoading = false;
//         state.bookItems = action.payload;

//         // state.bookItems = action.payload;
//       })
//       .addCase(getBooks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.bookItems = action.payload.message;
//       });
//   },
// });

// console.log(bookSlice);

// export const { addBook, removeBook } = bookSlice.actions;
// export default bookSlice.reducer;
