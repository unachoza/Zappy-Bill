import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import { INITIAL_USER_STATE } from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments//
const HomePage = ({ calcElectricBill, executeScroll }) => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });

  //not being used YET
  const validateForm = (currentRate, milesDriven, chargingHours) => {
    const { startTime, endTime } = chargingHours;
    if (!currentRate || !milesDriven || !startTime || !endTime) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    const { currentRate, milesDriven } = userData;
    calcElectricBill(currentRate, milesDriven, chargingHours);
  };

  return (
    <div className="page">
      <div className="form-container">
        <h1 className="header">Calculate Electric Vehicle Energy Cost!</h1>
        <RateCheckInput handleChange={handleChange} />
        <DrivingMilesInput handleChange={handleChange} />
        <ChargeHoursInput chargingHours={chargingHours} setChargingHours={setChargingHours} />
        <button
          onClick={() => {
            handleSubmit();
            executeScroll();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
