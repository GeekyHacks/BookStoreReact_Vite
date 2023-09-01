// import { useSelector, useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/bookSlice';
// import BookProgress from './Books/BookProgress';
// import Buttons from './Books/Buttons';

// const BooksContainer = () => {
//   const books = useSelector((state) => state.books.bookItems);

//   const dispatch = useDispatch();

//   const handleRemoveBook = (item_id) => {
//     dispatch(removeBook(item_id));
//   };

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

//               {/* <div className="scdDiv">
//                 <div className="BookStatus">
//                   <div className="progressBar">
//                     <div>64%</div>
//                   </div>
//                   <span className="headSpan" />
//                   <div>
//                     <h3>
//                       64% <br />
//                       <span>Completed</span>
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="BookChapter">
//                   <div className="headfour">
//                     <h4>CURRENT CHAPTER</h4>
//                     <h3>Chapter 17</h3>
//                   </div>
//                   <button type="button">UPDATE PROGRESS</button>
//                 </div>
//               </div> */}
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

import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import BookProgress from './Books/BookProgress';
import Buttons from './Books/Buttons';

const BooksContainer = () => {
  const books = useSelector((state) => state.books.bookItems);

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
