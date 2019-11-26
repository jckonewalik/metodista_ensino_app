import { combineReducers } from 'redux';
import classReducer from './class/class.reducer';

const rootReducer = combineReducers({
  classes: classReducer,
});

export default rootReducer;
