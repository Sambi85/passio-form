import actionTypes from '../action-types/metric';

const initialState = {
        som: 'Metric',
        kilos: 0,
        meters: 0
};

export default (state=initialState, action) => {
    switch (action.type) {
        
        case actionTypes.POST_METRIC:
            const convertedData = action.payload;
          return { ...state, kilos: convertedData.kilos, meters: convertedData.meters };
        
        default:
          return state;
  };
};