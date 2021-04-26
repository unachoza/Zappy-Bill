import React, { useState } from 'react';
import './TimeDropDown.scss';

const TimeDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
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
      <h1>Select Time</h1>
      <div className="DropDownContainer">
        <div className="DropDownHeader" onClick={toggling}>
          12:00AM
        </div>

        {isOpen && (
          <div className="DropDownListContainer">
            <ul className="DropDownList">
              {hourOptions.map((hour, i) => (
                <li key={i} className="ListItem">
                  {hour}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default TimeDropDown;

{
  /* <div>
<input
  aria-invalid="false"
  aria-label="From"
  name="from"
  type="text"
  kind="text"
  className="_3KAjxM5bbF"
  value="10:00am"
></input>
<input
  aria-invalid="false"
  aria-label="To"
  name="to"
  type="text"
  kind="text"
  className="_3KAjxM5bbF"
  value="1:00pm"
></input>
</div> */
}
