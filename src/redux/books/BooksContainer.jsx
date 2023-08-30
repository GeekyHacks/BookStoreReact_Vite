import BookItem from './BookItem';

const BooksContainer = () => {
  const result = (
    <div className="BooksContainer">
      <BookItem />
      <BookItem />
    </div>
  );
  return result;
};

export default BooksContainer;
