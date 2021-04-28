import React, { useState } from 'react';
import InfoModal from '../../InfoModal/InfoModal';
import './RateCheckInput.scss';

const RateCheckInput = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <label>What is your current Electricity Bill Rate?</label>
      <div className="form" onClick={handleChange}>
        <div className="form__radio__group">
          <input id="flat" type="radio" className="form__radio__input" name="currentRate" value="flat" />
          <label htmlFor="flat" className="form__radio__label" id="flat">
            <span className="form__radio-button"></span>
            Flat Rate
          </label>
        </div>
        <div className="form__radio__group ">
          <input id="flex" type="radio" className="form__radio__input" name="currentRate" value="flex" />
          <label htmlFor="flex" id="flex" className="form__radio__label">
            <span className="form__radio-button"></span>
            Flex Rate
          </label>
          <span>
            {' '}
            <img
              src={`https://res.cloudinary.com/dh41vh9dx/image/upload/v1619578173/3946401821543238897.svg`}
              className="info-icon"
              alt="information icon"
              onClick={toggling}
            />
          </span>
        </div>
      </div>
      {isOpen && <InfoModal toggling={toggling} />}
    </>
  );
};

export default RateCheckInput;
