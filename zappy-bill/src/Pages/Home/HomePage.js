import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import { INITIAL_USER_STATE, EV_KWH_RATE, FLAT_RATE, TOU_RATE, PEAK_HOURS_VALUES } from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments.
const HomePage = () => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });
  const [bill, setBill] = useState(0);
  const [suggestion, setSuggestion] = useState('');

  //works
  const createHoursRange = (size, startAt) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };
  //works
  const checkPeakHours = (arr1, arr2) => {
    return arr1.filter((elm) => arr2.includes(elm));
  };
  //Works
  const calcChargeHours = (start, end) => {
    return end < start ? 24 - start + end : Math.abs(end - start);
  };
  //Works
  const calcTOUHours = ({ startTime, endTime }) => {
    const totalHours = calcChargeHours(startTime, endTime);
    const chargingRange = createHoursRange(totalHours, startTime);
    const totalPeakHours = checkPeakHours(PEAK_HOURS_VALUES, chargingRange).length;
    const peakChargePercentage = totalPeakHours / totalHours;
    const offPeakChargePercentage = (totalHours - totalPeakHours) / totalHours;
    return { peakChargePercentage, offPeakChargePercentage };
  };

  //works
  const calcFlexBill = (energyConsumption, peakHours, offpeakHours, offpeakRate, peakRate) => {
    let offpeakCost = energyConsumption * offpeakHours * offpeakRate;
    let peakCost = energyConsumption * peakHours * peakRate;
    return offpeakCost + peakCost;
  };

  // works
  const calcElectricBill = (currentRate, milesDriven, chargingHours) => {
    const evKWhConsumption = milesDriven * EV_KWH_RATE;
    const flatBill = evKWhConsumption * FLAT_RATE;
    const usersTOUHours = calcTOUHours(chargingHours);
    const flexBill = calcFlexBill(
      evKWhConsumption,
      usersTOUHours.peakChargePercentage,
      usersTOUHours.offPeakChargePercentage,
      TOU_RATE.offPeak,
      TOU_RATE.peak
    );
    calculateOptimalRate(currentRate, flatBill, flexBill);
    setBill(currentRate === 'flat' ? flatBill : flexBill);
  };

  //works
  const calculateOptimalRate = (currentRate, flatBill, flexBill) => {
    const optimalprice = Math.min(flatBill, flexBill);
    if (currentRate === 'flex') {
      setSuggestion(optimalprice === flexBill ? 'Keep Your Rate' : 'Switch');
    } else if (currentRate === 'flat') {
      setSuggestion(optimalprice === flatBill ? 'Keep Your Rate' : 'Switch');
    }
  };
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
