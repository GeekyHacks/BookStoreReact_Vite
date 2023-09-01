import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    if (title && category) {
      const newBook = {
        item_id: `item${Date.now()}`,
        title,
        author,
        category,
      };

      dispatch(postBooks(newBook));
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="AddBook">
      <h3>Add new Book</h3>
      <div className="bookInput">
        <input type="text" required placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* <input
          type="text"
          required
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        /> */}

        <input
          type="text"
          required
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBook;
