import React from 'react';
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import './ChargeHoursInput.scss';

const ChargeHoursInput = ({ chargingHours, setChargingHours }) => {
  return (
    <>
      <label>When do you plan to charge your vehicle?</label>
      <div className="ChargeHoursInput-container">
        <TimeDropDown name="startTime" chargingHours={chargingHours} setChargingHours={setChargingHours} />
        <span className="ChargeHoursInput-dash">—</span>
        <TimeDropDown name="endTime" chargingHours={chargingHours} setChargingHours={setChargingHours} />
      </div>
    </>
  );
};

export default ChargeHoursInput;
