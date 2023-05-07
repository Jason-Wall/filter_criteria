import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import PSDChart from './Components/PSDChart';

import { rechartDataFormat, sampleSerials } from './Helpers/dataFormat';
import { USCDistribution } from './Helpers/classification';

export default function App() {
  // State management and functions:
  const [rechartData, setRechartData] = useState([]);
  const [serials, setSerials] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {

    //Get all PSD data from server:
    axios.get('https://soilsserver-production.up.railway.app/psd/')
      .then((res) => {
        // console.log('axios.get All psd data', res.data);
        const dbDump = res.data;
        setRechartData(rechartDataFormat(dbDump));
        setSerials(sampleSerials(dbDump));
        let classifyArr = [];
        classifyArr = dbDump.map((sample) => USCDistribution(sample.results));
        setClassifications(classifyArr);
      });

  }, []);

  return (
    <Fragment>
      <PSDChart chartData={rechartData} serials={serials} classifications={classifications} />
    </Fragment>
  );
}




