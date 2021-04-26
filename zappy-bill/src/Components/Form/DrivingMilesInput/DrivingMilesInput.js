import React, { useState } from 'react';
import './DrivingMilesInput.scss';

const DrivingMilesInput = () => {
  const [milesDriving, setMilesDriven] = useState(0);
  const handleChange = (value) => {
    setMilesDriven(Number.parseFloat(value));
  };
  return (
    <div className="input_container">
      <label htmlFor="">How many miles do you drive in a year?</label>
      <input
        class="milesInput"
        type="number"
        placeholder="Annual Miles"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default DrivingMilesInput;
