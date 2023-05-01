import React, { Fragment, useState, useEffect } from 'react';
import PSDChart from './Components/PSDChart';
import BarChart from './BarChart';

import { rechartDataFormat, sampleSerials } from './Helpers/dataFormat';


const dbDump = require('./Helpers/data');


// console.log('dbDump', dbDump);
// console.log('rechartData', rechartData);
// console.log('serials', serials);


export default function App() {
  // State management and functions:
  const [chartData, setChartData] = useState([]);
  const [serials, setSerials] = useState([]);

  useEffect(() => {
    setChartData(rechartDataFormat(dbDump));
    setSerials(sampleSerials(dbDump));
  }, []);

  return (
    <Fragment>
      <PSDChart chartData={chartData} serials={serials} />
    </Fragment>
  );
}




