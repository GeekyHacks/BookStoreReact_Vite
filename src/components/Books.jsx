import BooksContainer from './Books/BooksContainer';
import AddBook from './Books/AddBook';

const Books = () => {
  const result = (
    <div className="Books">
      <BooksContainer />
      <span className="hSpan" />
      <AddBook />
    </div>
  );
  return result;
};

export default Books;
