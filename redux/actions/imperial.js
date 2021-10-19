import actionTypes from '../action-types/imperial';

export const POST_IMPERIAL = (postImperial) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.POST_IMPERIAL,
      payload: postImperial
    });
  };
};

export default {
  POST_IMPERIAL
};