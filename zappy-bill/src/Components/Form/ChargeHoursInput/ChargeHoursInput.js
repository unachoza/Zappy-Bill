import React from 'react';
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import './ChargeHoursInput.scss';
import trashIcon from '../../../zappyAssests/trashIcon.svg';
import plusIcon from '../../../zappyAssests/plusIcon.svg';

const ChargeHoursInput = ({ chargingHours, setChargingHours }) => {
  return (
    <>
      <label>When do you plan to charge your vehicle?</label>
      <div className="ChargeHoursInput-container">
        <TimeDropDown name="startTime" chargingHours={chargingHours} setChargingHours={setChargingHours} />

        <span className="ChargeHoursInput-dash">—</span>
        <TimeDropDown name="endTime" chargingHours={chargingHours} setChargingHours={setChargingHours} />

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
