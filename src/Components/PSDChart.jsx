import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function PSDChart() {
  const data = [
    { size: 4.75, passing: 100 },
    { size: 1.18, passing: 85 },
    { size: 0.3, passing: 15 },
    { size: 0.15, passing: 4 },
    { size: 0.02, passing: 1 },
  ];

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <LineChart data={data} margin={{ top: 50, right: 50, left: 50, bottom: 50 }}>
        <CartesianGrid stroke='#f5f5f5' />
        <Line dataKey={'passing'}></Line>
        <XAxis
          dataKey='size'
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
