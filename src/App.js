import React, { Fragment } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

import * as d3 from 'd3';


function App() {
  return (
    <Fragment>

      <BarChart
        data={[12, 5, 6, 6, 8, 10]}
        chartSizing={{
          barHeightMultiplier: 10,
          barWidth: 100,
          barGap: 5,
        }
        } />
      <LineChart data={[
        [0.001, 95.35],
        [2, 97.84],
        [300, 99.92],
        [4000, 99.8],
        [50000, 98.8]
      ]} />
    </Fragment>
  );
}

export default App;



