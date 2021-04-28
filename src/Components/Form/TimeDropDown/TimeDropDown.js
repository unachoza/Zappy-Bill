import React, { useState } from 'react';
import './TimeDropDown.scss';

const TimeDropDown = ({ setChargingHours, chargingHours, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('00:00');

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = ({ id, innerHTML, value }) => {
    setChargingHours({ ...chargingHours, [id]: value });
    setSelectedOption(innerHTML);
    setIsOpen(false);
  };

  const convertMiltaryTime = (hour) => {
    return hour > 12 && hour < 24 //13-23
      ? `${hour - 12}:00PM` //1pm -11pm
      : hour === 12
      ? `${hour}:00PM` //12pm
      : hour !== 24
      ? `${hour}:00AM` // 1am -11am
      : `${hour - 12}:00AM`; //24 / 12am
  };

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => convertMiltaryTime(idx + 1));
  };
  const hourOptions = range(1, 24);
  return (
    <>
      <div className="DropDownContainer">
        <div className="DropDownHeader" onClick={toggling}>
          {selectedOption}
        </div>

        {isOpen && (
          <div className="DropDownListContainer">
            <ul className="DropDownList">
              {hourOptions.map((hour, i) => {
                return (
                  <li key={i} id={name} value={i + 1} className="ListItem" onClick={(e) => onOptionClicked(e.target)}>
                    {hour}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default TimeDropDown;
