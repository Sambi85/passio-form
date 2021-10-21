import actionTypes from '../action-types/imperial';
import * as FileSystem from 'expo-file-system';

const initialState = {
        pounds: 0,
        feet: 0, 
        inches: 0,
};

export default (state=initialState, action) => {
    switch (action.type) {
        
        case actionTypes.POST_IMPERIAL:
            const postData = action.payload;
          return { ...state, pounds: postData.pounds, feet: postData.feet, inches: postData.inches };

        case actionTypes.TO_IMPERIAL:
            const convertedData = action.payload;
          return { ...state, pounds: convertedData.pounds, feet: convertedData.feet, inches: convertedData.inches };

        default:
          return state;
  };
};