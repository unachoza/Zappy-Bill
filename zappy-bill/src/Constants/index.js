export const INITIALSTATE = {
  currentRate: 'flat',
  milesDriven: 0,
  chargingHours: [],
};

export const FORM_DATA = [
  {
    formInput: 'dropdown',
    name: 'currentRate',
    title: 'Your Current Rate',
    icon: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619192056/cashIcon.png',
  },
  {
    formInput: 'number',
    name: 'milesDriven',
    title: 'Miles Driven',
    icon: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619192055/carIcon.png',
  },
  {
    formInput: 'date/times',
    name: 'chargingHours',
    title: 'When do you Charge?',
    icon: 'https://res.cloudinary.com/dh41vh9dx/image/upload/v1619192055/plantIcon.png',
  },
];

export const PEAK_HOURS = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
