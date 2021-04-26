import React, { useState } from 'react';
import UserDataCard from '../../Components/UserDataCard/UserDataCard';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { FORM_DATA, INITIAL_USER_STATE, FIXED_RATE, TOU_RATE } from '../../Constants';
import './HomePage.scss';

const HomePage = () => {
  const [userData, setUserData] = useState({ INITIAL_USER_STATE });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // setLoading(true);
    const { currentRate, milesDriven, chargingHours } = userData;
    calcElectricBill(currentRate, milesDriven, chargingHours);

    // setPage(resultsPage);
    //3 inputs need to be validated
    //loading spinner
    //run calculate function to
    //change page
  };
  const calcElectricBill = (rate, drivingMiles, percentagePeak = 0, percentageOffPeak = 0) => {
    console.log(rate, drivingMiles, percentagePeak, percentageOffPeak);
    const userCurrentRate = rate;
    let rateEvaluation = '';
    const initialHomeLoadFixed = 15_242.9;
    const initialHomeLoadFlex = 11_242.9;
    const evKWhConsumption = drivingMiles * 0.3;
    const evBillImpactFix = evKWhConsumption * FIXED_RATE;
    const evBillImpactFlex = evKWhConsumption * percentageOffPeak + evKWhConsumption * percentagePeak;

    if (rate === Math.min(evBillImpactFix, evBillImpactFlex)) {
      rateEvaluation = 'Current Rate is most efficient';
    } else {
      rateEvaluation = 'Switching rates is more cost efficient';
    }
    const newBill = initialHomeLoadFixed + evBillImpactFix;
    console.log('the calclations', evBillImpactFix, rate);
    return evBillImpactFix, newBill, rateEvaluation;
  };

  console.log('on home page, where is state', userData);
  return (
    <>
      <h1 className="header">Hello, Jenny User!</h1>
      {loading === false ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="user-data cards">
              <div className="data-card"> Please provide some information to calculate your Energy Bill</div>
              {FORM_DATA.map((card, i) => {
                return (
                  <button
                    key={i}
                    className={`card card${i}`} //singleValidInput() ? `card card${i} valid` :
                  >
                    <UserDataCard key={i} card={card} handleInput={handleInput} />
                  </button>
                );
              })}
            </div>
            <button id="submitButton" type="submit">
              submit
            </button>
          </form>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default HomePage;
