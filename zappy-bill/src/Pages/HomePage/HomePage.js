import React, { useState } from 'react';
import UserDataCard from '../../Components/UserDataCard/UserDataCard';
import TimeInput from '../../Components/TimeInput/TimeInput';
import TimePicker from '../../Components/TimePicker/TimePicker';
import { FORM_DATA } from '../../Constants';
import './HomePage.scss';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [openActive, setOpenActive] = useState(false);

  const toggleOpen = (e) => {
    setOpen(!open);
    console.log('is this open', open);
  };

  const toggleActive = (e) => {
    setOpenActive(!openActive);
  };

  return (
    <>
      <h1 className="header">Hello, Jenny User!</h1>
      <div className="user-data cardss">
        <div className="data-card"> Please provide some information to calculate your Energy Bill</div>
        {FORM_DATA.map((card, i) => {
          return (
            <>
              <button
                onClick={(e) => toggleOpen(e)}
                onTransitionEnd={(e) => toggleActive(e)}
                className={open ? `card card${i} open` : `card card${i}`}
              >
                <UserDataCard key={i} card={card} />
              </button>
              <TimePicker />
            </>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
