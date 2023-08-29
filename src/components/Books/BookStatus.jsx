const BookStatus = () => {
  const result = (
    <div className="BookStatus">
      <div className="progressBar">
        <div>64%</div>
      </div>
      <span className="headSpan" />
      <div>
        <h3>
          64%
          {' '}
          <br />
          <span>Completed</span>
        </h3>
      </div>
    </div>
  );

  return result;
};

export default BookStatus;
