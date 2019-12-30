import { combineReducers } from 'redux';
import classReducer from './class/class.reducer';
import attendanceReducer from './attendance/attendance.reducer';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

const persistConfig = { 
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  classes: classReducer,
  attendance: attendanceReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
