import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import { INITIAL_USER_STATE } from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments//
const HomePage = ({ calcElectricBill }) => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });
  const handleSubmit = () => {
    const { currentRate, milesDriven } = userData;
    calcElectricBill(currentRate, milesDriven, chargingHours);
  };

  return (
    <>
      <h1 className="header">Hello, Jenny User!</h1>
      <RateCheckInput handleChange={handleChange} />
      <DrivingMilesInput handleChange={handleChange} />
      <ChargeHoursInput chargingHours={chargingHours} setChargingHours={setChargingHours} />
      <button onClick={handleSubmit}>Calculate</button>
    </>
  );
};

export default HomePage;
