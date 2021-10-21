import React, { useState, useEffect } from 'react';
import styles from '../css/form';
import { connect } from 'react-redux';

import { POST_METRIC, TO_METRIC } from '../../redux/actions/metric.js';
import { POST_IMPERIAL, TO_IMPERIAL } from '../../redux/actions/imperial';
import { saveHandler, toMetric, toImperial } from './formHelpers';

import { Alert, TouchableOpacity, Picker, Text, TextInput, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function formScreen(props) {
  
  const { 
    imperialData,
    metricData,
    toImperialData,
    toMetricData,
    setMetricData,
    setImperialData
  } = props;
  const { pounds, feet, inches } = imperialData;
  const { kilos, meters } = metricData;
  
  const [ localMetric, setLocalMetric ] = useState({ kilos: 0, meters: 0 });
  const [ localImperial, setLocalImperial ] = useState({ pounds: 0, feet: 0, inches: 0 });
  const [ localSystem, setLocalSystem ] = useState({ system: 'Imperial' });
  const [ error, setError ] = useState(false);
  
  useEffect(() => {
    setLocalImperial({
      pounds: pounds,
      feet: feet,
      inches: inches
    }),
    setLocalMetric({
      kilos: kilos,
      meters: meters
    })
  },[imperialData, metricData]);

  const saveData = {
    pounds: pounds,
    feet: feet, 
    inches: inches,
    kilos: kilos, 
    meters: meters,
    system: localSystem.system
  };

  const converterHandler = (value) => {
      
      setLocalSystem({...localSystem, system: value});

      if(value === 'Imperial') {
        let convertedData = toImperial(localMetric);
        setMetricData(localMetric);
        toImperialData(convertedData);

      } else if (value === 'Metric') {
        let convertedData = toMetric(localImperial);
        setImperialData(localImperial);
        toMetricData(convertedData);
    };
  };
  const alertHandler = () =>
    Alert.alert(
      "Form Data Saved",
      "Your data has been saved",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  );

  const pickerHandler = (value) => {
    return converterHandler(value);
  };

  const validWeight = (event) => {
    let result = isNaN(event);

    if(localSystem.system === 'Imperial') {
      return result? setError(true) : setLocalImperial({...localImperial, pounds: event});
      
    } else if (localSystem.system === 'Metric') {
      return result? setError(true) : setLocalMetric({...localMetric, kilos: event});
      
    } else { 
      return null;
    };
  };
    
  const validHeight = (event) => {
      let result = isNaN(event);
    if(localSystem.system === 'Imperial') {
      return result? setError(true) : setLocalImperial({...localImperial, feet: event});
        
    } else if (localSystem.system === 'Metric') {
      return result? setError(true) : setLocalMetric({...localMetric, meters: event});
    
    } else { 
      return null;
    };
  };
    
  const validInches = (event) => {
    let result = isNaN(event);
    return result? setError(true) : setLocalImperial({...localImperial, inches: event});
  };

  const weightValue = () => {
    if(localSystem.system === 'Imperial') {
      return `${localImperial.pounds||''}`; 
    } else if (localSystem.system === 'Metric') {
      return `${localMetric.kilos||''}`; 
    };
  };

  const heightValue = () => {
      if (localSystem.system === 'Imperial') {
        return `${localImperial.feet||''}`;
      } else if (localSystem.system === 'Metric') {
        return `${localMetric.meters||''}`;
    };
  };

  const inchesValue = () => {
    return `${localImperial.inches||''}`;
  };

  const errorHandler = () => {
    return error? "Sorry, only integers or floats are valid!" : null;
  };

  return (
    <SafeAreaView>
      <LinearGradient 
      colors={['blue', 'cyan']} 
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={styles.background}>

        <Text style={styles.header}>Form</Text>
        <Text style={styles.errorMessage}>{errorHandler()}</Text>
        <View style={styles.pickerView}>
            <Picker
                selectedValue={localSystem.system}
                style={styles.picker}
                onValueChange={ value => { pickerHandler(value) }}
            >
                <Picker.Item label="Imperial" value="Imperial" itemStyle={styles.pickerItem}/>
                <Picker.Item label="Metric" value="Metric" itemStyle={styles.pickerItem}/>
            </Picker>
        </View>

      <View style={styles.somView}>
        {localSystem.system ==='Imperial'? 
        <MaterialCommunityIcons name="weight-pound" size={30} color="white"/>
        : <MaterialCommunityIcons name="weight-kilogram" size={30} color="white"/>
        }
          <TextInput
            style={styles.weight}
            onChangeText={validWeight}
            value={weightValue()}
            placeholder={localSystem.system ==='Imperial'? 'Pounds':'Kilograms'}
          />
          <Text style={styles.weightText}>
            {localSystem.system ==='Imperial'? 'lbs.':'kg.'}
          </Text>
          <View style={styles.imperialHeight}>
            <TextInput
              style={styles.height}
              onChangeText={validHeight}
              value={heightValue()}
              placeholder={localSystem.system==='Imperial'? 'Feet': 'Meters'}
            />
            <Text style={styles.heightText}>
            {localSystem.system==='Imperial'? 'ft.': 'm'}
            </Text>
              { localSystem.system==='Imperial'? 
                <><TextInput
                    style={styles.inches}
                    onChangeText={validInches}
                    value={inchesValue()}
                    placeholder={'inches'}
                />
                <Text style={styles.inchesText}>
                  in.
                </Text>
                </> : null }
          </View>
      </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            color='blue'
            style={styles.button}
            onPress={() => saveHandler(saveData), alertHandler
            }>
            <Text style={styles.buttonText}>
                Save
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
    );
  }

const msp = (state) => {
  return { 
    imperialData: state.imperial,
    metricData: state.metric
  };
};

const mdp = (dispatch) => ({
  setMetricData: (metricData) => dispatch(POST_METRIC(metricData)),
  setImperialData: (imperialData) => dispatch(POST_IMPERIAL(imperialData)),
  toMetricData: (toMetricData) => dispatch(TO_METRIC(toMetricData)),
  toImperialData: (toImperialData) => dispatch(TO_IMPERIAL(toImperialData))
});

export default connect(msp,mdp)(formScreen);
