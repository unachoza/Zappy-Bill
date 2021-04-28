import React, { useState } from 'react';
import RateCheckInput from '../../Components/Form/RateCheckInput/RateCheckInput';
import DrivingMilesInput from '../../Components/Form/DrivingMilesInput/DrivingMilesInput';
import ChargeHoursInput from '../../Components/Form/ChargeHoursInput/ChargeHoursInput';
import InfoModal from '../../Components/InfoModal/InfoModal';
import { INITIAL_USER_STATE, EV_KWH_RATE, FLAT_RATE, TOU_RATE, PEAK_HOURS_VALUES } from '../../Constants';
import { useForm } from '../../Utility/useForm';
import './HomePage.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments.
const HomePage = () => {
  const [userData, handleChange] = useForm(INITIAL_USER_STATE);
  const [chargingHours, setChargingHours] = useState({ startTime: 0, endTime: 0 });

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
    console.log('time of use', typeof peakChargePercentage, typeof offPeakChargePercentage);
    return { peakChargePercentage, offPeakChargePercentage };
  };

  //works // HOWEVER when called inside of calcElectricBill, adding offpeak & peakCost returns NAN
  const calcFlexBill = (energyConsumption, peakHours, offpeakHours, offpeakRate, peakRate) => {
    console.log(energyConsumption, peakHours, offpeakHours, offpeakRate, peakRate);
    let offpeakCost = energyConsumption * offpeakHours * offpeakRate;
    let peakCost = energyConsumption * peakHours * peakRate;

    console.log(offpeakCost, peakCost);
    return offpeakCost + peakCost;
  };

  //does not work
  const calcElectricBill = (currentRate, milesDriven, chargingHours) => {
    const evKWhConsumption = milesDriven * EV_KWH_RATE;
    const evFlatBill = evKWhConsumption * FLAT_RATE;
    const usersTOUHours = calcTOUHours(chargingHours);
    const evBillImpactFlex = calcFlexBill(
      evKWhConsumption,
      usersTOUHours.peakChargePercentage,
      usersTOUHours.offPeakChargePercentage,
      TOU_RATE.offPeak,
      TOU_RATE.peak
    );

    console.log({ evBillImpactFlex });
    // const rateEvaluation = calculateOptimalRate(currentRate, evBillImpactFlat, evBillImpactFlex);
    // console.log(rateEvaluation);
    // return rateEvaluation;
  };

  // evKWhConsumption * usersTOUHours.offPeakChargePercentage * TOU_RATE.peak +
  //     evKWhConsumption * usersTOUHours.peakChargePercentage * TOU_RATE.offPeak;

  //does not work
  // const calculateOptimalRate = (currentRate, evFlatBill, evBillImpactFlex) => {
  //   let optimalprice = Math.min(evFlatBill, evBillImpactFlex);
  //   if (currentRate === 'flat' && optimalprice == evFlatBill) {
  //     rateEvaluation.userSuggestion = 'Keep Your Rate';
  //   } else if (currentRate === 'flex' && optimalprice == evBillImpactFlex) {
  //     rateEvaluation.userSuggestion = `switch`;
  //   }
  // };

  const handleSubmit = () => {
    console.log('submited');
    const { currentRate, milesDriven } = userData;
    calcElectricBill(currentRate, milesDriven, chargingHours);
  };
  // const showModal () {
  //   modal.classList.add('show-modal');
  //   websiteNameEl.focus();
  // }

  // modalShow.addEventListener('click', showModal);
  // modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
  // window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));
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
