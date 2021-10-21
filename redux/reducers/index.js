import { combineReducers } from 'redux';
import metric from './metric';
import imperial from './imperial';

export default combineReducers({ 
    metric: metric,
    imperial: imperial
});