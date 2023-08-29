import Book from './Book';

const BooksContainer = () => {
  const result = (
    <div className="BooksContainer">
      <Book />
      <Book />
    </div>
  );
  return result;
};

export default BooksContainer;
