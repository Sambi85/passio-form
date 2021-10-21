import React, { useEffect }from 'react';
import styles from '../css/home';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

import { POST_METRIC } from '../../redux/actions/metric.js';
import { POST_IMPERIAL } from '../../redux/actions/imperial';

import { loadMetric, loadImperial } from './loadDataHelpers';

function homeScreen(props) {
  const { navigation, setMetricData, setImperialData } = props;
  
  useEffect(() => {
    loadMetric().then(resp => { setMetricData(resp) });
    loadImperial().then(resp => { setImperialData(resp) });
  },[]);

  return (
    <View style={styles.homeView}>
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
        <Text style={styles.text}>Home Screen</Text>
        <TouchableOpacity
          color='blue'
          style={styles.button}
          onPress={() => navigation.navigate('FormScreen')
          }>
            <Text style={styles.buttonText}>
              Form Screen
            </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
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

export default connect(msp,mdp)(homeScreen);
