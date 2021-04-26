import React, { useState } from 'react';
import './RateCheckInput.scss';

const RateCheckInput = () => {
  const [currentRate, setCurrentRate] = useState(null);

  const onChangeValue = (event) => {
    setCurrentRate(event.target.id);
  };
  return (
    <div className="form" onClick={onChangeValue}>
      <div className="form__radio__group">
        <input id="flat" type="radio" className="form__radio__input" name="currentRate" />
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
