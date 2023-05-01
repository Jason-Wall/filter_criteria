import React, { Fragment } from 'react';
import PSDChart from './Components/PSDChart';
import BarChart from './BarChart';
const dbDump = require('../Helpers/data');


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
      <PSDChart data={dbDump} />

    </Fragment>
  );
}

export default App;



