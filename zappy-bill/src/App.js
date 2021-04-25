import React, { useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { INITIALSTATE } from './Constants';
import './App.scss';

const App = () => {
  const [userData, setUserData] = useState({ INITIALSTATE });

  const getUserChargingSchedule = (formInput) => {
    const totalChargeHours = formInput.totalHours
    const percentagePeak = formInput.schedule // how many of totalHours fall between 12pm -6pm
    const percentageOffPeak formInput.schedule // how many of totalHours fall between 7pm -11am
    return totalChargeHours, percentagePeak, percentageOffPeak
  }

  const calcElectricBill = (rate, drivingMiles, percentagePeak, percentageOffPeak) => {
    const userCurrentRate = rate
    let rateEvaluation = ''
    const initialHomeLoadFixed = 15242.9;
    const initialHomeLoadFlex = 11242.9;
    const evKWhConsumption = drivingMiles * 0.3
  
    const evBillImpactFix = evKWhConsumption * fixedRate
    const evBillImpactFlex = (evKWhConsumption * percentageOffPeak) + (evKWhConsumption * percentagePeak)
      if (userRate === (Math.min(evBillImpactFix, evBillImpactFlex))) {
       rateEvaluation = 'Current Rate is most efficient'
      } else {
         rateEvaluation = 'Switching rates is more cost efficient'
    }
    const newBill = initialHomeLoadFixed + evBillImpact;
    return evBillImpact , newBill, rateEvaluation
  };


  return (
    <div className="App">
      <header className="App-header">Zappy Bill</header>
      <HomePage />
    </div>
  );
};

export default App;
