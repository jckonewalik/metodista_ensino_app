import { combineReducers } from 'redux';
import classReducer from './class/class.reducer';
import attendanceReducer from './attendance/attendance.reducer';

const rootReducer = combineReducers({
  classes: classReducer,
  attendance: attendanceReducer,
});

export default rootReducer;
