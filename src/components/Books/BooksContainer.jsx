import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../../redux/books/bookSlice';
import BookProgress from './BookProgress';
import BookButtons from './BookButtons';

const BooksContainer = () => {
  const { isLoading } = useSelector((state) => state.books);
  const books = useSelector((state) => state.books.bookItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

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
                  <span className="cate">{book.category}</span>
                  <h2 className="bookTitle">{book.title}</h2>
                  <span className="author">{book.author}</span>
                  <BookButtons handleBook={handleRemoveBook} book={book} />
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
