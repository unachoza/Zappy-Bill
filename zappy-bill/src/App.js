import React, { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { useParseCSV } from './Utility/useParseCSV';
import { INITIALSTATE } from './Constants';
import { csv } from 'd3';
import './App.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments.
const App = () => {
  const [userData, setUserData] = useState({ INITIALSTATE });
  const [parsedData, setParsedData] = useState('');

  useEffect(() => {
    const fetchBill = async () => {
      const homeLoadProfile = await csv('CurrentHomeLoadProfile.csv');
      setParsedData(homeLoadProfile);
      console.log(homeLoadProfile);
    };
    fetchBill();
  }, []);

  console.log('got, it', parsedData);
  const getUserChargingSchedule = (formInput) => {
    const totalChargeHours = formInput.totalHours;
    const percentagePeak = formInput.schedule; // how many of totalHours fall between 12pm -6pm
    const percentageOffPeak = formInput.schedule; // how many of totalHours fall between 7pm -11am
    return totalChargeHours, percentagePeak, percentageOffPeak;
  };

  // const calcElectricBill = (rate, drivingMiles, percentagePeak, percentageOffPeak) => {
  //   const userCurrentRate = rate;
  //   let rateEvaluation = '';
  //   const initialHomeLoadFixed = 15_242.9;
  //   const initialHomeLoadFlex = 11_242.9;
  //   const evKWhConsumption = drivingMiles * 0.3;

  //   const evBillImpactFix = evKWhConsumption * fixedRate;
  //   const evBillImpactFlex = evKWhConsumption * percentageOffPeak + evKWhConsumption * percentagePeak;
  //   if (userRate === Math.min(evBillImpactFix, evBillImpactFlex)) {
  //     rateEvaluation = 'Current Rate is most efficient';
  //   } else {
  //     rateEvaluation = 'Switching rates is more cost efficient';
  //   }
  //   const newBill = initialHomeLoadFixed + evBillImpact;
  //   return evBillImpact, newBill, rateEvaluation;
  // };
  return (
    <div className="App">
      <header className="App-header">Zappy Bill</header>
      <HomePage />
    </div>
  );
};

export default App;
