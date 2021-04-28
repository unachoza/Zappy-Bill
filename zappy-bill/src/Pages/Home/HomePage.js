import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import { INITIAL_USER_STATE, EV_KWH_RATE, FLAT_RATE, TOU_RATE, PEAK_HOURS_VALUES } from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

const HomePage = () => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });
  //works
  const createHoursRange = (size, startAt) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };
  //works
  const theIntersection = (arr1, arr2) => {
    return arr1.filter((elm) => arr2.includes(elm));
  };
  //Works
  const calculateChargeHours = (start, end) => {
    return end < start ? 24 - start + end : Math.abs(end - start);
  };
  //Works
  const calculateTOUHours = ({ startTime, endTime }) => {
    const totalHours = calculateChargeHours(startTime, endTime);
    const chargingRange = createHoursRange(totalHours, startTime);
    const totalPeakHours = theIntersection(PEAK_HOURS_VALUES, chargingRange).length;
    const peakChargePercentage = totalPeakHours / totalHours;
    const offPeakChargePercentage = (totalHours - totalPeakHours) / totalHours;
    return { peakChargePercentage, offPeakChargePercentage };
  };
  //does not work
  const calculateOptimalRate = (currentRate, evBillImpactFlat, evBillImpactFlex) => {
    let optimalprice = Math.min(evBillImpactFlat, evBillImpactFlex);
    if (currentRate === 'flat' && optimalprice == evBillImpactFlat) {
      rateEvaluation.userSuggestion = 'Keep Your Rate';
    } else if (currentRate === 'flex' && optimalprice == evBillImpactFlex) {
      rateEvaluation.userSuggestion = `switch`;
    }
  };

  //works // HOWEVER when called inside of calcElectricBill, adding offpeak & peakCost returns NAN
  const calcFlexBill = (energyConsumption, hourspeak, hoursOffpeak, offpeakRate, peakRate) => {
    let offpeakCost = energyConsumption * hoursOffpeak * offpeakRate;
    let peakCost = energyConsumption * hourspeak * peakRate;
    return offpeakCost + peakCost;
  };
  //does not work
  const calcElectricBill = (currentRate, milesDriven, chargingHours) => {
    const evKWhConsumption = milesDriven * EV_KWH_RATE;
    const evBillImpactFlat = evKWhConsumption * FLAT_RATE;
    const usersChargingPercentages = calculateTOUHours(chargingHours);
    return;
  };

  const handleSubmit = () => {
    console.log('submited');
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
