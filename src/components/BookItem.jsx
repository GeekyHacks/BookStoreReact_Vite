const BookItem = () => {
  const result = (
    <div className="Book">
      <div className="fstDiv">
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
      </div>

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
    </div>
  );
  return result;
};

export default BookItem;
