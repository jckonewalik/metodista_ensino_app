import { combineReducers } from 'redux';
import classReducer from './class/class.reducer';
import attendanceReducer from './attendance/attendance.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  classes: classReducer,
  attendance: attendanceReducer,
  user: userReducer,
});

export default rootReducer;
