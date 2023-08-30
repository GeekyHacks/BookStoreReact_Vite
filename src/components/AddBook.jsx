const AddBook = () => {
  const result = (
    <div className="AddBook">
      <h3>Add new Book</h3>
      <div className="bookInput">
        <input type="text" required placeholder="Book Title" />
        <input type="text" required placeholder="category" />
        <button type="button">Add</button>
      </div>
    </div>
  );
  return result;
};

export default AddBook;
