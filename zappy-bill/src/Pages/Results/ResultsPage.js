import React from 'react';
import './ResultsPage.scss';

const ResultsPage = ({ bill, suggestion }) => {
  return (
    <div className="resultsPage">
      <h1>Your Bill</h1>
      <div className="billInfo">
        <div className="billInfo-cost">{bill}</div>
        <div className="billInfo-rate">{suggestion}</div>
      </div>
    </div>
  );
};

export default ResultsPage;
