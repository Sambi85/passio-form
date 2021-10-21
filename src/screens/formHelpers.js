import * as FileSystem from 'expo-file-system';

export const saveHandler = async (saveData) => {

  let contents = JSON.stringify(saveData);
  let fileUri = `${FileSystem.documentDirectory + 'formData.txt'}`;
  let options = { encoding: FileSystem.EncodingType.UTF8 };
  let readFile ='read';

  try {
    FileSystem.writeAsStringAsync(fileUri, contents, options);
    readFile = await FileSystem.readAsStringAsync(fileUri, options);
  } catch(e) {
    console.log(e);
  };
  console.log(readFile);
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
