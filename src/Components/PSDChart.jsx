import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const graphColor = require('../Helpers/graphColor');

//MAIN FUNCTION
export default function PSDChart({ chartData, tableData, selectedRows, setSelectedRows }) {
  //manage state:
  const [hoverSerial, setHoverSerial] = useState(null);

  //Supporting functions
  const lineStyling = (id) => {
    if (selectedRows.length === 0) {
      return {
        stroke: '#5b5b5b',
        strokeWidth: 2,
        zIndex: 1000,
      };
    }
    if (selectedRows.includes(id)) {
      return {
        stroke: 'red',
        strokeWidth: 3,
        zIndex: 2000,
      };
    }
    if (!selectedRows.includes(id)) {
      return {
        stroke: '#ababab',
        strokeWidth: 2,
        zIndex: 1000,
      };
    }
  };

  const lines = tableData.map((sample) => {
    const linestyle = lineStyling(sample.id);
    return (
      <Line
        key={sample.id}
        dataKey={sample.id}
        stroke={linestyle.stroke}
        strokeWidth={linestyle.strokeWidth}
        sx={{ zIndex: linestyle.zIndex }}
        connectNulls={true}
        animationDuration={500}
        onClick={() => {
          setSelectedRows([sample.id]);
        }}
      />
    );
  });

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <LineChart data={chartData} margin={{ top: 50, right: 50, left: 50, bottom: 50 }}>
        <CartesianGrid stroke='#f5f5f5' />
        {lines}
        <XAxis
          dataKey='sieve'
          label={{
            value: 'Particle Size (mm)',
            position: 'bottom',
          }}
          type='number'
          scale='log'
          ticks={[100, 50, 10, 1, 0.5, 0.1, 0.05, 0.01, 0.005, 0.001]}
          reversed={true}
          allowDecimals={true}
          domain={[100, 0.001]}
        ></XAxis>
        <YAxis
          dataKey='size'
          label={{
            value: 'Percent Passing (%)',
            angle: -90,
            position: 'insideLeft',
            textAnchor: 'middle',
          }}
          type='number'
          domain={[0, 100]}
        ></YAxis>
        {/* <Tooltip /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
