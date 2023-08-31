// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addBook } from '../redux/books/bookSlice';

// const BooksContainer = () => {
//   // useSelector allow us to pick the desired item from a store state value.
//   // state.<name of the reducer slice>.<the data you wanna pick>

//   const books = useSelector((state) => state.books.bookItems);
//   //dispatch allow us to update the state after using reducers and useselectors

//   const dispatch = useDispatch();

//   const handleAddBook = () => {
//     const removed = {
//       item_id: `item${books.length + 1}`,
//       title: `New Book ${books.length + 1}`,
//       author: 'Author Name',
//       category: 'Category',
//     };
//     dispatch(addBook(removed));
//   };

//   return (
//     <div className="BooksComponent">
//       {books.length > 0 ? (
//         <ul>
//           {books.map((book) => (
//             <li key={book.item_id}>
//               Title: {book.title}, Author: {book.author}, Category: {book.category}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No books available</p>
//       )}
//     </div>
//   );
// };

// export default BooksContainer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const BooksContainer = () => {
  // useSelector allow us to pick the desired item from a store state value.
  // state.<name of the reducer slice>.<the data you wanna pick>

  const books = useSelector((state) => state.books.bookItems);
  //dispatch allow us to update the state after using reducers and useselectors

  const dispatch = useDispatch();

  const handleRemoveBook = (item_id) => {
    dispatch(removeBook(item_id));
  };

  return (
    <div className="BooksComponent">
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.item_id} className="Book">
              <div className="fstDiv">
                <div className="BookDetails">
                  <span>{book.category}</span>
                  <h2>{book.title}</h2>
                  <span>{book.author}</span>
                  <div>
                    <button href="https://github.com/GeekyHacks" type="a">
                      Comments
                    </button>
                    <span>|</span>
                    <button onClick={() => handleRemoveBook(book.item_id)} type="button">
                      Remove
                    </button>
                    <span>|</span>
                    <button type="a" href="https://github.com/GeekyHacks">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="scdDiv">
                <div className="BookStatus">
                  <div className="progressBar">
                    <div>64%</div>
                  </div>
                  <span className="headSpan" />
                  <div>
                    <h3>
                      64% <br />
                      <span>Completed</span>
                    </h3>
                  </div>
                </div>
                <div className="BookChapter">
                  <div className="headfour">
                    <h4>CURRENT CHAPTER</h4>
                    <h3>Chapter 17</h3>
                  </div>
                  <button type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BooksContainer;
