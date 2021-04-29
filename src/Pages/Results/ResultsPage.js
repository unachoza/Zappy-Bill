import React, { useState, forwardRef } from 'react';
import './ResultsPage.scss';

const ResultsPage = ({ bill, suggestion }, ref) => {
  return (
    <div ref={ref} className="resultsPage">
      <div className="results-content">
        <div className="billInfo">
          <div className="billInfo-cost">{`Your Electric Vehicle would impact your Electric Bill by $${bill}`}</div>
          <div className="billInfo-rate">{`We suggest you ${suggestion}`}</div>
        </div>
      </div>
    </div>
  );
};

const forwardedResultsPageRef = forwardRef(ResultsPage);

export default forwardedResultsPageRef;
