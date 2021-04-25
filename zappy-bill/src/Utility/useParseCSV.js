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

export const calulateHomeLoadProfile = (data, rate) => {
  const [bill, setBill] = useState(0);
  // change strings into proper numbers parseNum
  if (rate === 'flat') {
    // sum every row from (row[1]-row[row.length-1])
    // sum those sums
    // take final sum and multiply by 15c
  }

  return bill;
};

//CHECK    //I need to upload the csv file => How to upload csv file with react hooks
//parse the csv file to be able to query the data =>  how to query csv file / json with react Hooks
//perform calculations on the data
//homeLoadProfile with Flat rate
//homeLoadProfile with TOU rate
//These are constants to be used in EVLoad calculation
