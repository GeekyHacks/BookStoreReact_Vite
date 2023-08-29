import BookDetails from './BookDetails';
import BookStatus from './BookStatus';
import BookChapter from './BookChapter';

const Book = () => {
  const result = (
    <div className="Book">
      <div className="fstDiv">
        {' '}
        <BookDetails />
      </div>

      <div className="scdDiv">
        {' '}
        <BookStatus />
        <BookChapter />
      </div>
    </div>
  );
  return result;
};

export default Book;
