const data = {
  id: 7,
  data: [
    { size: 8.75, passing: 100 },
    { size: 1.18, passing: 80 },
    { size: 0.3, passing: 30 },
    { size: 0.15, passing: 20 },
    { size: 0.02, passing: 10 },
  ]
};

const classify = (sieveResults) => {
  const divisions = [['gravel', 75], ['sand', 4.75], ['silt', 0.075], ['bottom', 0]];
  const sieveExpanded = [...sieveResults, { size: 1 * 10 ** 6, passing: 100 }, { size: 0, passing: 0 }];
  sieveExpanded.sort((a, b) => b.size - a.size);

  const classifyObj = {};
  let divIndex = 0;
  let sieveIndex = 0;
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
      const linterp = (sieveP - sieveDownP) * (divSize - sieveDown) / (sieve - sieveDown) + sieveDownP;
      classifyObj[divName] = linterp;
      divIndex++;
    }
    sieveIndex++;

    if (!sieveDown || !divSize) {
      working = false;
    }
  }

  console.log(classifyObj);

};




classify(data.data);