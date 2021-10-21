import actionTypes from '../action-types/metric';

let initialState = { kilos: 0, meters: 0 };

export default (state=initialState, action) => {
    switch (action.type) {
        
        case actionTypes.POST_METRIC:
            const postData = action.payload;
          return { ...state, kilos: postData.kilos, meters: postData.meters };

        case actionTypes.TO_METRIC:
            const convertedData = action.payload;
          return { ...state, kilos: convertedData.kilos, meters: convertedData.meters };
        
        default:
          return state;
  };
};