import actionTypes from '../action-types/imperial';

export const POST_IMPERIAL = (postImperial) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.POST_IMPERIAL,
      payload: postImperial
    });
  };
};

export const TO_IMPERIAL = (convertedData) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.TO_IMPERIAL,
      payload: convertedData
    });
  };
};

export default {
  POST_IMPERIAL,
  TO_IMPERIAL
};