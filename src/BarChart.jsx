import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function BarChart({ data, chartSizing }) {
  useEffect(() => {
    drawChart(data, chartSizing);
    return () => {
      removeChart();
    };
  }, [chartSizing, data]);

  const removeChart = () => {
    d3.selectAll('.bar-chart-svg').remove();
  };

  const drawChart = (data, chartSizing) => {
    const barHeightMultiplier = chartSizing.barHeightMultiplier;
    const barWidth = chartSizing.barWidth;
    const barGap = chartSizing.barGap;

    const chartHeight = d3.max(data) * barHeightMultiplier * 1.5;
    const chartWidth = data.length * (barWidth + barGap);

    //Create chart container
    const svg = d3
      .select('.bar-chart')
      .append('svg')
      .attr('class', 'bar-chart-svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight);

    //Create bars
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (barWidth + barGap) + barGap)
      .attr('y', (d, i) => chartHeight - d * barHeightMultiplier)
      .attr('width', barWidth)
      .attr('height', (d, i) => d * barHeightMultiplier)
      .attr('fill', 'green');

    //Create labels
    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * (barWidth + barGap) + barWidth / 4)
      .attr('y', (d, i) => chartHeight - barHeightMultiplier * d - barGap);
  };

  return <div className='bar-chart'></div>;
}
