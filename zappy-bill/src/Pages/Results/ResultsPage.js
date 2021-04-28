import React, { useState } from 'react';
import { FORM_DATA, INITIAL_USER_STATE, FIXED_RATE, TOU_RATE } from '../../Constants';
import './ResultsPage.scss';

const ResultsPage = ({ billImpact, bestRate }) => {
  const [userData, setUserData] = useState({ INITIAL_USER_STATE });

  return (
    <div className="resultsPage">
      <h1>Your Bill</h1>
      <div className="billInfo">
        {/* <div className="billInfo-cost">{billImpact}</div> */}
        <div className="billInfo-rate">{bestRate}</div>
      </div>
    </div>
  );
};

export default ResultsPage;
