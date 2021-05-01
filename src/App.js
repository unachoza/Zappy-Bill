import React, { useState, useRef } from 'react';
import HomePage from './Pages/Home/HomePage';
import ResultsPage from './Pages/Results/ResultsPage';
import BarChart from './Components/BarChart/BarChart';
import { EV_KWH_RATE, FLAT_RATE, TOU_RATE, PEAK_HOURS_VALUES } from './Constants';
import './App.scss';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const App = () => {
  const [bill, setBill] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const resultsPageRef = useRef(null);
  const homePageRef = useRef(null);

  const createHoursRange = (size, startAt) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };
  const checkPeakHours = (arr1, arr2) => {
    return arr1.filter((elm) => arr2.includes(elm));
  };
  const calcChargeHours = (start, end) => {
    return end < start ? 24 - start + end : Math.abs(end - start);
  };
  const calcTOUHours = ({ startTime, endTime }) => {
    const totalHours = calcChargeHours(startTime, endTime);
    const chargingRange = createHoursRange(totalHours, startTime);
    const totalPeakHours = checkPeakHours(PEAK_HOURS_VALUES, chargingRange).length;
    const peakPercentage = totalPeakHours / totalHours;
    const offPeakPercentage = (totalHours - totalPeakHours) / totalHours;
    return { peakPercentage, offPeakPercentage };
  };

  const calcFlexBill = (energyConsumption, peakHours, offpeakHours, offpeakRate, peakRate) => {
    let offpeakCost = energyConsumption * offpeakHours * offpeakRate;
    let peakCost = energyConsumption * peakHours * peakRate;
    return offpeakCost + peakCost;
  };

  const calcElectricBill = (currentRate, milesDriven, chargingHours) => {
    const evKWhConsumption = milesDriven * EV_KWH_RATE;
    const flatBill = evKWhConsumption * FLAT_RATE;
    const usersTOUHours = calcTOUHours(chargingHours);
    const flexBill = calcFlexBill(
      evKWhConsumption,
      usersTOUHours.peakPercentage,
      usersTOUHours.offPeakPercentage,
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
      setSuggestion(optimalprice === flexBill ? 'Keep Your Rate' : 'Switch Rates');
    } else if (currentRate === 'flat') {
      setSuggestion(optimalprice === flatBill ? 'Keep Your Rate' : 'Switch Rates');
    }
  };

  const executeResultScroll = () => {
    resultsPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const executeHomeScroll = () => {
    homePageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <HomePage ref={homePageRef} calcElectricBill={calcElectricBill} executeScroll={executeResultScroll} />
      <ResultsPage ref={resultsPageRef} bill={bill} suggestion={suggestion} executeScroll={executeHomeScroll} />
    </div>
  );
};

export default App;
