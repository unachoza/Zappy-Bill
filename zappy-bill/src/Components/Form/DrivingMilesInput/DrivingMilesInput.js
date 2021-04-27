import React from 'react';
import './DrivingMilesInput.scss';

const DrivingMilesInput = ({ handleChange }) => {
  return (
    <div className="input_container">
      <label>How many miles do you drive in a year?</label>
      <input
        type="number"
        className="milesInput"
        placeholder="Annual Miles"
        name="milesDriven"
        onChange={handleChange}
      />
    </div>
  );
};

export default DrivingMilesInput;
