import React, { Fragment, useState, useEffect } from 'react';
import PSDChart from './Components/PSDChart';
import BarChart from './BarChart';

import { rechartDataFormat, sampleSerials } from './Helpers/dataFormat';
import { USCDistribution } from './Helpers/classification';

const dbDump = require('./Helpers/data');

export default function App() {
  // State management and functions:
  const [rechartData, setRechartData] = useState([]);
  const [serials, setSerials] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    setRechartData(rechartDataFormat(dbDump));
    setSerials(sampleSerials(dbDump));
    let classifyArr = [];
    classifyArr = dbDump.map((sample) => USCDistribution(sample.data));
    setClassifications(classifyArr);

  }, []);

  return (
    <Fragment>
      <PSDChart chartData={rechartData} serials={serials} classifications={classifications} />
    </Fragment>
  );
}




