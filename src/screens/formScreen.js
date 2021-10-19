import React, { useState, useEffect } from 'react';
import styles from '../css/form';
import { connect } from 'react-redux';
import { POST_METRIC } from '../../redux/actions/metric.js';
import { POST_IMPERIAL } from '../../redux/actions/imperial';

import { TouchableOpacity, Picker, Text, TextInput, SafeAreaView, View } from 'react-native';

import { saveHandler, toMetric, toImperial } from './formHelpers';

function formScreen(props) {
  
  const { 
    imperialData,
    metricData,
    setMetricData,
    setImperialData
  } = props;

  const { 
    pounds,
    feet, 
    inches,
  } = imperialData;
  
  const { 
    kilos, 
    meters,
  } = metricData;
  
  const [localMetric, setLocalMetric] = useState({
    kilos: 0,
    meters: 0
  });
  const [localImperial, setLocalImperial] = useState({
    pounds: 0,
    feet: 0,
    inches: 0
  });
  const [localSystem, setLocalSystem] = useState({
    system: 'Imperial'
  });

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

    const converterHandler = (value) => {
        
        if(value === 'Imperial') {
          let convertedData = toImperial(localMetric);
          setImperialData(convertedData);

        } else if (value === 'Metric') {
          let convertedData = toMetric(localImperial);
          setMetricData(convertedData);
        };
    };

    const pickerHandler = (value) => {
      return setLocalSystem({ ...localSystem, system: value }), converterHandler(value);
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
    }
    const errorHandler = () => {
      return error? "Sorry, only integers or floats are valid!" : null;
  };

    return (
    <SafeAreaView>
        <Text style={styles.header}>Conversion</Text>
        <Text style={styles.errorMessage}>{errorHandler()}</Text>
        <View style={styles.pickerView}>
            <Picker
                selectedValue={localSystem.som}
                style={styles.picker}
                onValueChange={ value => { pickerHandler(value) }}
            >
                <Picker.Item label="Imperial" value="Imperial" />
                <Picker.Item label="Metric" value="Metric" />
            </Picker>
        </View>

        <View style={styles.somView}>
            <TextInput
                style={styles.weight}
                onChangeText={() => validWeight(localSystem, localImperial, localMetric, () => setError)}
                value={weightValue()}
                placeholder={localSystem.system ==='Imperial'? 'Pounds':'Kilograms'}
            />
            <View style={styles.imperialHeight}>
                <TextInput
                    style={styles.height}
                    onChangeText={() => validHeight(localSystem, localImperial, localMetric, () => setError)}
                    value={heightValue()}
                    placeholder={localSystem.system==='Imperial'? 'Feet': 'Meters'}
                />
                { localSystem.system==='Imperial'? 
                <TextInput
                    style={styles.inches}
                    onChangeText={() => validInches(localSystem, localImperial, localMetric, () => setError)}
                    value={inchesValue()}
                    placeholder={'inches'}
                />: null }
            </View>
    </View>

    <View style={styles.buttonView}>
        <TouchableOpacity
        color='blue'
        style={styles.button}
        onPress={saveHandler}
        >
            <Text style={styles.buttonText}>
                Save
            </Text>
        </TouchableOpacity>
      </View>
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
  setImperialData: (imperialData) => dispatch(POST_IMPERIAL(imperialData))
});

export default connect(msp,mdp)(formScreen);
