import React, { useState } from 'react';
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import { useGetValueFromInput } from '../../../Utility/useGetValueFromInput';
import './ChargeHoursInput.scss';
import trashIcon from '../../../zappyAssests/trashIcon.svg';
import plusIcon from '../../../zappyAssests/plusIcon.svg';

const ChargeHoursInput = () => {
  const [timeRange, setTimeRange] = useState({ startTime: 0, endTime: 0 });
  console.log(timeRange);
  return (
    <>
      <label>When do you plan to charge your vehicle?</label>
      <div className="ChargeHoursInput-container">
        <TimeDropDown name="startTime" setTimeRange={setTimeRange} timeRange={timeRange} />
        <span className="ChargeHoursInput-dash">—</span>
        <TimeDropDown name="endTime" setTimeRange={setTimeRange} timeRange={timeRange} />
        <button id="remove">
          <img src={trashIcon} alt="trash can icon" style={{ width: '70%' }} />
        </button>
        <button id="remove">
          <img src={plusIcon} alt="add more icon" style={{ width: '60%' }} />
        </button>
      </div>
    </>
  );
};

export default ChargeHoursInput;
