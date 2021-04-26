import React, { useState } from 'react';
import './TimeDropDown.scss';

const TimeDropDown = ({ setTimeRange, timeRange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Start');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = ({ id, innerHTML }) => {
    setTimeRange({ ...timeRange, [id]: innerHTML });
    setSelectedOption(innerHTML);
    setIsOpen(false);
  };

  //get start and end time from two similar components set to userData

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
              {hourOptions.map((hour, i) => (
                <li key={i} id={name} className="ListItem" onClick={(e) => onOptionClicked(e.target)}>
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
