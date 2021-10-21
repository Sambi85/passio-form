import * as FileSystem from 'expo-file-system';

export const loadMetric = async () => {

  let fileUri = `${FileSystem.documentDirectory + 'formData.txt'}`;
  let options = { encoding: FileSystem.EncodingType.UTF8 };

  try {
    let readFile = await FileSystem.readAsStringAsync(fileUri, options);
    let loadData = JSON.parse(readFile);

    if (loadData) {
      return { kilos: loadData.kilos, meter: loadData.meters };
    } else {
      return { kilos: 0, meters: 0 };
    };

  } catch(e) {
    console.log(e);
  };
};

export const loadImperial = async () => {

    let fileUri = `${FileSystem.documentDirectory + 'formData.txt'}`;
    let options = { encoding: FileSystem.EncodingType.UTF8 };
  
    try {
      let readFile = await FileSystem.readAsStringAsync(fileUri, options);
      let loadData = JSON.parse(readFile);
  
      if (loadData) {
        return { pounds: loadData.pounds, feet: loadData.feet, inches: loadData.inches };
      } else {
        return { pounds: 0, feet: 0, inches: 0 };
      };
  
    } catch(e) {
      console.log(e);
    };
};