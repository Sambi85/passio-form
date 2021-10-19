
export const saveHandler = () => {
  // let payload =  JSON.stringify({ 
  //     'weight': `${weight}`,
  //     'height': `${height}`,
  //     'inches': `${inches}`,
  //     'system': `${som}`,
  //     'timeStamp': `${Date.now()/1000}`
  // })
  
  
const RNFS = require('react-native-fs');
// create a path you want to write to
const path = RNFS.DocumentDirectoryPath + '/test.text';
 
// write the file
RNFS.writeFile(path, 'Lorem', 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!');
  })
  .catch((err) => {
    console.log(err.message);
  });
};

export const toMetric = (imperial) => {
  const { pounds, feet, inches } = imperial;

  let kilos =  pounds/2.205;
  let meters = ((inches/12) + feet)/3.281;
  let roundKilos = Number.parseFloat(kilos).toFixed(2);
  let roundMeters = Number.parseFloat(meters).toFixed(2);

  return { kilos: roundKilos, meters: roundMeters };
};

export const toImperial = (metric) => {
  const { kilos, meters } = metric;

  let pounds = kilos * 2.205;
  let feet = Math.trunc(meters * 3.281);
  let inches = (meters * 3.281)%12;

  let roundPounds = Number.parseFloat(pounds).toFixed(2);
  let roundFeet = Number.parseFloat(feet).toFixed(2);
  let roundInches = Number((inches).toFixed(2));

  return { pounds: roundPounds, feet: roundFeet, inches: roundInches };
};
