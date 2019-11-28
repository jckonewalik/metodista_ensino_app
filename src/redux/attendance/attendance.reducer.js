import AttendanceTypes from './attendance.types';

const INITIAL_STATE = {
  date: null,
  students: [],
};

const attendanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AttendanceTypes.SET_ATTENDANCE_STUDENTS:
      return { ...state, students: action.payload };
    default:
      return state;
  }
};

export default attendanceReducer;
