
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;