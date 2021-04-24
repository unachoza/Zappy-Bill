import React from 'react';
import './TimeInput.scss';

const TimeInput = () => {
  return (
    <div className="data-component">
      <div className="time-container">
        <div className="title"></div>
        <div className="time-interval">
          <div className="start-time">
            <input aria-invalid="false" aria-label="From" name="from" type="text" kind="text" value="1:00pm" />
          </div>
          <input type="time" />

          <div className="end-time">
            <input aria-invalid="false" aria-label="To" name="to" type="text" kind="text" value="1:00pm" />
          </div>
        </div>
        {/* <div className="button-container">
          <button>remove interval</button>
          <button>add interval</button>
        </div> */}
      </div>
    </div>
  );
};

export default TimeInput;

//validate choosen times
