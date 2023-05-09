// Sample data if need to unit test
// const sieveResults = {
//    [
//     { size: 8.75, passing: 100 },
//     { size: 1.18, passing: 80 },
//     { size: 0.3, passing: 30 },
//     { size: 0.15, passing: 20 },
//     { size: 0.02, passing: 10 },
//   ]
// };

const USCDistribution = (sieveResults) => {
  const divisions = [['cobble', 75], ['gravel', 4.75], ['sand', 0.075], ['fines', 0], ['bottom', 0]];
  const sieveExpanded = [...sieveResults, { size: 1 * 10 ** 6, passing: 100 }, { size: 0, passing: 0 }];
  sieveExpanded.sort((a, b) => b.size - a.size);

  const classifyObj = {};
  let divIndex = 0;
  let sieveIndex = 0;
  let linterp;
  let prevLinterp = 100;
  let working = true;

  while (working === true) {

    let sieve = sieveExpanded[sieveIndex].size;
    let sieveP = sieveExpanded[sieveIndex].passing;
    let sieveDown = sieveExpanded[sieveIndex + 1].size;
    let sieveDownP = sieveExpanded[sieveIndex + 1].passing;
    let divSize = divisions[divIndex][1];
    let divName = divisions[divIndex][0];

    if (sieve > divSize && sieveDown < divSize) {
      //Linear interpolation between upper and lower sieve sizes against div marker.
      linterp = (sieveP - sieveDownP) * (divSize - sieveDown) / (sieve - sieveDown) + sieveDownP;
      //one decimal
      linterp = Number(linterp.toPrecision(2));
      classifyObj[divName] = prevLinterp - linterp;
      prevLinterp = linterp;
      divIndex++;
    }
    sieveIndex++;
    if (!sieveDown || !divSize) {
      working = false;
      classifyObj[divName] = linterp;
    }

  }

  return (classifyObj);
};


export { USCDistribution };

