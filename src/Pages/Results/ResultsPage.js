import React, { forwardRef } from 'react';
import './ResultsPage.scss';

const ResultsPage = ({ bill, suggestion, executeScroll }, ref) => {
  return (
    <div ref={ref} className="resultsPage">
      <div className="results-content">
        <div className="billInfo">
          <div className="billInfo-cost">{`Your Electric Vehicle would impact your Electric Bill by $${bill}`}</div>
          <div className="billInfo-rate">{`We suggest you ${suggestion}`}</div>
          <button onClick={() => executeScroll()}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

const forwardedResultsPageRef = forwardRef(ResultsPage);

export default forwardedResultsPageRef;
