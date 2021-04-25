import React, { useState } from 'react';
import UserDataCard from '../../Components/UserDataCard/UserDataCard';
import { FORM_DATA, INITIALSTATE } from '../../Constants';
import './HomePage.scss';

const HomePage = () => {
  const [userData, setUserData] = useState({ INITIALSTATE });
  const [open, setOpen] = useState(false);
  const [openActive, setOpenActive] = useState(false);

  const toggleOpen = (e) => {
    setOpen(!open);
  };

  const toggleActive = (e) => {
    setOpenActive(!openActive);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <h1 className="header">Hello, Jenny User!</h1>
      <div className="user-data cardss">
        <div className="data-card"> Please provide some information to calculate your Energy Bill</div>
        {FORM_DATA.map((card, i) => {
          return (
            <button
              key={i}
              onClick={(e) => toggleOpen(e)}
              onTransitionEnd={(e) => toggleActive(e)}
              className={open ? `card card${i} open` : `card card${i}`}
            >
              <UserDataCard key={i} card={card} handleInput={handleInput} />
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
