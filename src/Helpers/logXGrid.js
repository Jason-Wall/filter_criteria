const logXGrid = (lowerBound, upperBound) => {
  let grid = [];
  let gridValue = lowerBound;

  for (let i = 1; gridValue < upperBound; i++) {
    for (let j = 1; j < 10; j++) grid.push(gridValue * j);
    gridValue *= 10;
  }
  return grid;
};
