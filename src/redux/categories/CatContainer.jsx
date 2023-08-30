import BookItem from './CatItem';

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
