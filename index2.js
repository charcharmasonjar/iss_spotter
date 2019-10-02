const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function (passTimes) {
  for (const obj of passTimes) {
    const date = new Date(obj.risetime * 1000).toUTCString();
    console.log(`Next pass at ${date} for ${obj.duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });