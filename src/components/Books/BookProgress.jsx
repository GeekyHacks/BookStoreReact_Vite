import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookProgress = () => {
  const percentage = 64;

  return (
    <div className="scdDiv">
      <div className="BookStatus">
        <div>
          <CircularProgressbar value={percentage} text={''} />
        </div>
        <div>
          <h3 className="percentage">
            {percentage}%
            <br />
            <span className="completed">Completed</span>
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
