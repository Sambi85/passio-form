import actionTypes from '../action-types/imperial';

const initialState = {
        som: 'Imperial',
        pounds: 0,
        feet: 0, 
        inches: 0,
};

export default (state=initialState, action) => {
    switch (action.type) {
        
        case actionTypes.POST_IMPERIAL:
            const convertedData = action.payload;
          return { ...state, pounds: convertedData.pounds, feet: convertedData.feet, inches: convertedData.inches };

        default:
          return state;
  };
};