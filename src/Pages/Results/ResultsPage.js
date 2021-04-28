import React, { useState } from 'react';
import './ResultsPage.scss';

const ResultsPage = ({ bill, suggestion }) => {
  const [displayNotice, setDisplayNotice] = useState(false);
  return (
    <div className="resultsPage">
      <div className="results-content">
        <div className="billInfo">
          <div className="billInfo-cost">{`Your Electric Vehicle would impact your Electric Bill by $${bill}`}</div>
          <div className="billInfo-rate">{`We suggest you ${suggestion}`}</div>
          <button onClick={() => setDisplayNotice(true)}>Go Back</button>
          {displayNotice && <div>Scroll up to recalculate</div>}
        </div>
      </div>
    </div>
  );
};
export default ResultsPage;
