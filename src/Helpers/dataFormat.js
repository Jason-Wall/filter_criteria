const dbDump = require('./data');


const rechartDataFormat = (dbDump) => {
  const sieveSet = new Set();
  const rechartData = {};

  for (const sample of dbDump) {
    for (const sieve of sample.data) {
      if (!sieveSet.has(sieve.size)) {
        sieveSet.add(sieve.size);
        rechartData[sieve.size] = {};
        rechartData[sieve.size].sieve = sieve.size;
      }
      rechartData[sieve.size][sample.id] = sieve.passing;

    }
  }

  const rechartArr = Object.values(rechartData);
  rechartArr.sort((a, b) => {
    return a.sieve - b.sieve;
  });
  return rechartArr;
};

const sampleSerials = (dbDump) => {
  const serials = [];
  for (const sample of dbDump) {
    serials.push(sample.id);
  }
  return serials;
};

export { rechartDataFormat, sampleSerials };