import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/bookSlice';

const BookDetails = () => {
  const books = useSelector((state) => state.books.bookItems);

  const dispatch = useDispatch();

  const handleRemoveBook = (item_id) => {
    dispatch(removeBook(item_id));
  };

  const result = (
    <div className="BookDetails">
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
  );

  return result;
};

export default BookDetails;
