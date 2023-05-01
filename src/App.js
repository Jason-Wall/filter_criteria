import React, { Fragment } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PSDChart from './PSDChart';

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
      <PSDChart data={[
        [4.75, 100],
        [1.18, 85],
        [0.3, 15],
        [0.15, 4],
        [0.02, 1]
      ]} />
    </Fragment>
  );
}

export default App;



