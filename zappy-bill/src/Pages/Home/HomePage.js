import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import {
  INITIAL_USER_STATE,
  EV_KWH_RATE,
  FLAT_RATE,
  TOU_RATE,
  INITIAL_HOME_LOAD,
  PEAK_HOURS_VALUES,
} from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

const HomePage = () => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });
  const [billEstimate, setBilEstimate] = useState({ idealRate: '', billImpact: 0 });

  const createHoursRange = (size, startAt) => {
    return [...Array(size + 1).keys()].map((i) => i + startAt);
  };
  const theIntersection = (arr1, arr2) => {
    return arr1.filter((elm) => arr2.includes(elm));
  };

  const calculateTOUHours = (chargingHours) => {
    const totalHours = chargingHours.endTime - chargingHours.startTime;
    const chargingRange = createHoursRange(totalHours, chargingHours.startTime);
    const totalPeakHours = theIntersection(PEAK_HOURS_VALUES, chargingRange).length;
    const peakChargePercentage = totalPeakHours / totalHours;
    const offPeakChargePercentage = (totalHours - totalPeakHours) / totalHours;
    return { peakChargePercentage, offPeakChargePercentage };
  };
  const calculateOptimalRate = (currentRate, evBillImpactFlat, evBillImpactFlex) => {
    let optimalChoice = {};
    optimalChoice.price = Math.min(evBillImpactFlat, evBillImpactFlex);
    console.log(Math.min(evBillImpactFlat, evBillImpactFlex));
    optimalChoice.rate = currentRate === 'flat' ? `switch` : 'keep your rate';
    optimalChoice.rate = `With Your Current ${currentRate} Rate, You Should ${optimalChoice.rate} To Be Cost Effective`;
    return optimalChoice;
  };
  const calcElectricBill = (currentRate, milesDriven, chargingHours) => {
    const evKWhConsumption = milesDriven * EV_KWH_RATE;
    const evBillImpactFlat = evKWhConsumption * FLAT_RATE;
    const usersChargingPercentages = calculateTOUHours(chargingHours);
    const evBillImpactFlex =
      evKWhConsumption * usersChargingPercentages.offPeakChargePercentage * TOU_RATE.peak +
      evKWhConsumption * usersChargingPercentages.peakChargePercentage * TOU_RATE.offPeak;
    const rateEvaluation = calculateOptimalRate(currentRate, evBillImpactFlat, evBillImpactFlex);
    return rateEvaluation;
  };
  const handleSubmit = () => {
    const { currentRate, milesDriven } = userData;
    calculateTOUHours(chargingHours);
    calcElectricBill(currentRate, milesDriven, chargingHours);
    console.log(calcElectricBill(currentRate, milesDriven, chargingHours));
    return true;
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
