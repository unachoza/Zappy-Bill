import React from 'react';
import './ResultsPage.scss';

const ResultsPage = ({ bill, suggestion }) => {
  return (
    <div className="resultsPage">
      <div className="results-content">
        <h1>Your Bill</h1>
        <div className="billInfo">
          <div className="billInfo-cost">{`Your Electric Vehicle would impact your Electric Bill by $${bill}`}</div>
          <div className="billInfo-rate">{`We suggest you ${suggestion}`}</div>
        </div>
      </div>
    </div>
  );
};
export default ResultsPage;
