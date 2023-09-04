import BooksContainer from './BooksContainer';
import AddBook from './AddBook';

const BooksSection = () => {
  const result = (
    <div className="Books">
      <BooksContainer />
      <span className="hSpan" />
      <AddBook />
    </div>
  );
  return result;
};

export default BooksSection;
