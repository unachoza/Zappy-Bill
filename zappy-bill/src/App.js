import React, { useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { INITIALSTATE } from './Constants';
import './App.scss';

// const INITIALSTATE = userData = {
//   currentRate = null,
//   milesDriven = 0,
//   chargingHours = 0
// }

const App = () => {
  const [userData, setUserData] = useState({ INITIALSTATE });
  return (
    <div className="App">
      <header className="App-header">Zappy Bill</header>
      <HomePage />
    </div>
  );
};

export default App;
