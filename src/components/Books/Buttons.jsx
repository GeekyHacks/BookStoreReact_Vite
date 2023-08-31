import React from 'react';

const Buttons = ({ handleBook,book }) => {
  return (
    <div>
      <button href="https://github.com/GeekyHacks" type="a">
        Comments
      </button>
      <span>|</span>
      <button onClick={() => handleBook(book.item_id)} type="button">
        Remove
      </button>
      <span>|</span>
      <button type="a" href="https://github.com/GeekyHacks">
        Edit
      </button>
    </div>
  );
};

export default Buttons;
