export const INITIAL_USER_STATE = {
  currentRate: 'flat',
  milesDriven: 0,
};
export const chargingTimes = { startTime: 0, endTime: 0 };

export const INITIAL_FORM_STATE = {
  rateErrorMessage: '',
  milesDrivenErrorMessage: '',
};

export const INITIAL_HOME_LOAD = {
  FLAT: 15_242.9,
  TOU: 11_242.9,
};

export const EV_KWH_RATE = 0.3;

export const FLAT_RATE = 0.15;
export const TOU_RATE = { peak: 0.2, offPeak: 0.08 };
export const FORM_DATA = [
  {
    formInput: 'dropdown',
    name: 'currentRate',
    title: 'Your Current Rate',
    icon: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619393951/cashIcon_prev_ui.png',
  },
  {
    formInput: 'number',
    name: 'milesDriven',
    title: 'Miles Driven',
    icon: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619393951/carIcon_prev_ui.png',
  },
  {
    formInput: 'date/times',
    name: 'chargingHours',
    title: 'When do you Charge?',
    icon:
      'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619394130/clock-9pm-clock-9pm-clock-9pm-clock-icon-9-pm-11563089043ob1lveasd8.png',
  },
];
//assumption that between 'noon and 6pm' goes up to BUT DOES NOT inlude 6pm
export const PEAK_HOURS = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
export const PEAK_HOURS_VALUES = [12, 13, 14, 15, 16, 17];

export const MODAL_TEXT = `Peak Hours are between Noon and 6pm. During these hours you are charged $0.20/kWh. All other hours are Off
Peak and charged at a rate of $0.08/kWh. Depending on your charge schedule, you could be saving up to 53% !`;
