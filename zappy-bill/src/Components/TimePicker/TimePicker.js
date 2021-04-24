import { enableRipple } from '@syncfusion/ej2-base';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import './TimePicker.scss';
// enable ripple effect
enableRipple(true);

const TimePicker = () => {
  const time = new Date('8/3/2017 10:00');

  return (
    <div className="container">
      <TimePickerComponent id="timepicker" cssClass="e-custom-style"></TimePickerComponent>
    </div>
  );
};

export default TimePicker;
