import React, { useState } from 'react';
import './RateCheckInput.scss';

const RateCheckInput = ({ handleChange }) => {
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
        </div>
      </div>
    </>
  );
};

export default RateCheckInput;
