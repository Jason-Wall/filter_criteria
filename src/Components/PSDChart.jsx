import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from 'recharts';

const graphColor = require('../Helpers/graphColor');

//MAIN FUNCTION
export default function PSDChart({ chartData, tableData, selectedRows, setSelectedRows }) {
  //Supporting functions
  const lineStyling = (id, index) => {
    if (selectedRows.length === 0) {
      return {
        stroke: graphColor[index],
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

  const lines = tableData.map((sample, index) => {
    const linestyle = lineStyling(sample.id, index);
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

  const refLineData = [
    { value: 'Clay', x: 0.002, position: 'insideTopLeft' },
    { value: 'Silt', x: 0.08, position: 'insideTopLeft' },
    { value: 'Sand', x: 2.0, position: 'insideBottomLeft' },
    { value: 'Gravel', x: 64.0, position: 'insideBottomLeft' },
  ];
  const referenceLines = refLineData.map((line) => {
    return (
      <ReferenceLine
        key={line.value}
        x={line.x}
        stroke='grey'
        strokeDasharray='5 5'
        label={{ value: line.value, position: line.position, fontSize: 12 }}
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
          ticks={[100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.002, 0.001]}
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
          }}
          type='number'
          domain={[0, 100]}
          ticks={[100, 80, 60, 40, 20, 0]}
        ></YAxis>

        {referenceLines}
      </LineChart>
    </ResponsiveContainer>
  );
}
