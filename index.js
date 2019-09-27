const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("162.245.144.188", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('Your location data is:', data);
// });

// const coords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coords, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('ISS Flyover Data:', data);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});