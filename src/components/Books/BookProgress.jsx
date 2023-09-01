
const BookProgress = () => {
  return (
    <div className="scdDiv">
      <div className="BookStatus">
        <div className="progressBar">
          <div>64%</div>
        </div>
        <span className="headSpan" />
        <div>
          <h3>
            64% <br />
            <span>Completed</span>
          </h3>
        </div>
      </div>
      <div className="BookChapter">
        <div className="headfour">
          <h4>CURRENT CHAPTER</h4>
          <h3>Chapter 17</h3>
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default BookProgress;
