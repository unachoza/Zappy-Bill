import React from 'react';
import './RateCheckInput.scss';

const RateCheckInput = () => {
  return (
    <div className="form">
      <div className="form__radio__group">
        <input type="radio" className="form__radio__input" id="flat" name="currentRate" />
        <label for="flat" className="form__radio__label" id="flat">
          <span className="form__radio-button"></span>
          Flat Rate
        </label>
      </div>
      <div className="form__radio__group ">
        <input type="radio" className="form__radio__input" id="flex" name="currentRate" />
        <label for="flex" className="form__radio__label" id="flex">
          <span className="form__radio-button"></span>
          Flex Rate
        </label>
      </div>
    </div>
  );
};

export default RateCheckInput;
