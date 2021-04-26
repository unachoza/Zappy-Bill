import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const useParseCSV = () => {
  const [parsedData, setParsedData] = useState('');
  const fetchBill = async () => {
    const homeLoadProfile = await csv('CurrentHomeLoadProfile.csv');
    setParsedData(homeLoadProfile);
  };

  useEffect(() => {
    fetchBill();
  }, []);
};

// export const calulateHomeLoadProfile = (data, rate) => {
//   const [bill, setBill] = useState(0);
//   // change strings into proper numbers parseNum
//   if (rate === 'flat') {
//     // sum every row from (row[1]-row[row.length-1])
//     // sum those sums
//     // take final sum and multiply by 15c
//   }

//   return bill;
// };

//***************************** */
// const validateInputs = () => {
//   let rateErrorMessage = '';
//   let milesDrivenErrorMessage = '';
//   let chargingHoursErrorMessage = '';
//   if (!userData.currentRate === 'flex' || !userData.currentRate === 'flat') {
//     rateErrorMessage = 'please choose flex or flat';
//   }
//   if (rateErrorMessage) {
//     setErrorMessage({ ...userData, rateErrorMessage });
//     return false;
//   }
//   if (typeof !userData.milesDriven === 'number') {
//     milesDrivenErrorMessage = 'please enter a valid number';
//   }
//   if (milesDrivenErrorMessage) {
//     setErrorMessage({ ...userData, milesDrivenErrorMessage });
//     return false;
//   }
//   if (typeof !userData.chargingHours === 'array') {
//     chargingHoursErrorMessage = 'please enter range of hours you plan to charge your electric vehicle';
//   }
//   if (chargingHoursErrorMessage) {
//     setErrorMessage({ ...userData, rateErrorMessage });
//     return false;
//   }
//   return true;
// };
//***************************** */

// const toggleOpen = (e) => {
//   setOpen(!open);
// };

// const toggleActive = (e) => {
//   setOpenActive(!openActive);
// };

//***************************** */

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const isValid = validateInputs();
//   if (isValid) {
//     console.log(userData);
//     // clear form
//     setErrorMessage({ INITIAL_FORM_STATE });
//   }
// };
// const diplayErrorMessage = () => {
//   let error = Object.values(errorMessage).filter((message) => message);
//   return error[0];
// };

// const [errorMessage, setErrorMessage] = useState({ INITIAL_FORM_STATE });
// const [open, setOpen] = useState(false);
// const [openActive, setOpenActive] = useState(false);

//***************************** */

//CHECK    //I need to upload the csv file => How to upload csv file with react hooks
//parse the csv file to be able to query the data =>  how to query csv file / json with react Hooks
//perform calculations on the data
//homeLoadProfile with Flat rate
//homeLoadProfile edwith TOU rate
//These are constants to be used in EVLoad calculation
