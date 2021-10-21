import actionTypes from '../action-types/metric';

export const POST_METRIC = (postMetric) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.POST_METRIC,
      payload: postMetric
    });
  };
};

export const TO_METRIC = (toMetric) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.TO_METRIC,
      payload: toMetric
    });
  };
};

export default {
  POST_METRIC,
  TO_METRIC
};