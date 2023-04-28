import React, { Fragment } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

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
        [1, 95.35],
        [2, 97.84],
        [3, 99.92],
        [4, 99.8],
        [5, 90.8]
        // [new Date('2007-04-24'), 95.35],
        // [new Date('2007-04-25'), 98.84],
        // [new Date('2007-04-26'), 99.92],
        // [new Date('2007-04-27'), 99.8],
        // [new Date('2010-04-27'), 100.8],
        // [0, 1],
        // [2, 1.1],
        // [3, 1.4],
        // [4, 2],
        // [5, 3],
        // [5, 3.5],
        // [8, 5]
      ]} />
    </Fragment>
  );
}

export default App;



