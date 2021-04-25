import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const useParseCSV = () => {
  const [parsedData, setParsedData] = useState('');
  const fetchBill = async () => {
    const homeLoadProfile = await csv('CurrentHomeLoadProfile.csv');
    setParsedData(homeLoadProfile);
    console.log(homeLoadProfile);
  };

  useEffect(() => {
    fetchBill();
  }, []);
};

//I need to upload the csv file => How to upload csv file with react hooks
//parse the csv file to be able to query the data =>  how to query csv file / json with react Hooks
//perform calculations on the data
//homeLoadProfile with Flat rate
//homeLoadProfile with TOU rate
//These are constants to be used in EVLoad calculation
