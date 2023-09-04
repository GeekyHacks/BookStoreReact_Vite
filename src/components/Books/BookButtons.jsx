import PropTypes from 'prop-types';

const BookButtons = ({ handleBook, book }) => {
  return (
    <div className="editSect">
      <button href="https://github.com/GeekyHacks" type="a" className="comment">
        Comments
      </button>
      {/* <span className="hSpan"></span> */}
      <button onClick={() => handleBook(book.item_id)} type="button" className="remove">
        Remove
      </button>
      {/* <span className="hSpan"></span> */}
      <button type="a" href="https://github.com/GeekyHacks">
        Edit
      </button>
    </div>
  );
};

BookButtons.propTypes = {
  handleBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default BookButtons;
