import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/bookSlice';
import BookProgress from './Books/BookProgress';
import Buttons from './Books/Buttons';

const BooksContainer = () => {
  const { isLoading } = useSelector((state) => state.books);
  const books = useSelector((state) => state.books.bookItems);
  console.log(books);

  const dispatch = useDispatch();

  // Fetch books from the API when the component mounts
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = (item_id) => {
    dispatch(removeBook(item_id));
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

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
                  <Buttons handleBook={handleRemoveBook} book={book} />
                </div>
              </div>

              <BookProgress />
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

// // export default BooksContainer;
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/bookSlice';
// import BookProgress from './Books/BookProgress';
// import Buttons from './Books/Buttons';
// import { getBooks } from '../redux/books/bookSlice';

// const BooksContainer = () => {
//   const { isLoading } = useSelector((state) => state.books);
//   const books = useSelector((state) => state.books.bookItems);
//   const dispatch = useDispatch();

//   const handleRemoveBook = (item_id) => {
//     dispatch(removeBook(item_id));
//   };
//   [];

//   useEffect(() => {
//     dispatch(getBooks());
//   }, [dispatch]);

//   return (
//     <div className="BooksComponent">
//       {books.length > 0 ? (
//         <ul>
//           {books.map((book) => (
//             <li key={book.item_id} className="Book">
//               <div className="fstDiv">
//                 <div className="BookDetails">
//                   <span>{book.category}</span>
//                   <h2>{book.title}</h2>
//                   <span>{book.author}</span>
//                   <Buttons handleBook={handleRemoveBook} book={book} />
//                 </div>
//               </div>

//               <BookProgress />
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
