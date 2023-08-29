const BookDetails = () => {
  const result = (
    <div className="BookDetails">
      <span>Action</span>
      <h2>The Hunger Games</h2>
      <span>Author name</span>
      <div>
        <a href="https://github.com/GeekyHacks" type="a">
          Comments
        </a>
        <span>|</span>
        <a href="https://github.com/GeekyHacks" type="a">
          Remove
        </a>
        <span>|</span>
        <a type="a" href="https://github.com/GeekyHacks">
          Edit
        </a>
      </div>
    </div>
  );

  return result;
};

export default BookDetails;
