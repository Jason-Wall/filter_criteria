import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const graphColor = require('../Helpers/graphColor');

export default function PSDChart({ chartData, serials }) {
  // console.log('data', data);
  // console.log('serials', serials);

  const lines = serials.map((serial, i) => {
    return (
      <Line
        key={serial}
        dataKey={serial}
        stroke={graphColor[i]}
        connectNulls={true}
        animationDuration={500}
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
      </LineChart>
    </ResponsiveContainer>
  );
}
