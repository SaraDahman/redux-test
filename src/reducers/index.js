import counterReducer from './counter';
import islogged from './islogged';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  counter: counterReducer,
  islogged: islogged,
});

export default reducers;
