import React, { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { INITIAL_USER_STATE } from './Constants';
import { csv } from 'd3';
import './App.scss';

//A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments.
const App = () => {
  const [userData, setUserData] = useState({ INITIAL_USER_STATE });
  const [parsedData, setParsedData] = useState('');
  const [bill, setBill] = useState(0);

  useEffect(() => {
    const fetchBill = async () => {
      const homeLoadProfile = await csv('CurrentHomeLoadProfile.csv');
      setParsedData(homeLoadProfile);
    };
    fetchBill();
  }, []);

  const calulateHomeLoadProfile = (currentHomeLoad = parsedData, rate) => {
    const PEAK_HOURS = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    const peakHourRate = 0.2;
    const offPeakRate = 0.08;
    const flatRate = 0.15;
    let bill = rate === 'flat' ? 15_178.1 : 11_242.9;
    return `Your current electricity bill is ${bill}`;
  };

  const getUserChargingSchedule = (formInput) => {
    const totalChargeHours = formInput.totalHours;
    const percentagePeak = formInput.schedule; // how many of totalHours fall between 12pm -6pm
    const percentageOffPeak = formInput.schedule; // how many of totalHours fall between 7pm -11am
    return totalChargeHours, percentagePeak, percentageOffPeak;
  };

  return (
    <div className="App">
      <header className="App-header">Zappy Bill</header>
      <HomePage />
    </div>
  );
};

export default App;
