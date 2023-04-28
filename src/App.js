import BarChart from './BarChart';

function App() {
  return (
    <BarChart
      data={[12, 5, 6, 6, 8, 10]}
      chartSizing={{
        barHeightMultiplier: 10,
        barWidth: 100,
        barGap: 5,
      }
      } />
  );
}

export default App;
