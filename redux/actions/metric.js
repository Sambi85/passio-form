import actionTypes from '../action-types/metric';

export const POST_METRIC = (postMetric) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.POST_METRIC,
      payload: postMetric
    });
  };
};

export default {
  POST_METRIC
};