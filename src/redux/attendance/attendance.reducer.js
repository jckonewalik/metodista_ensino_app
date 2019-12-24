import AttendanceTypes from './attendance.types';
import { setAppointment } from './attendance.utils';

const INITIAL_STATE = {
  date: new Date(),
  appointments: [],
  teacher: null,
  lesson: null,
  message: '',
};

const attendanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AttendanceTypes.SET_ATTENDANCE_APPOINTMENTS:
      return { ...state, appointments: action.payload };
    case AttendanceTypes.SET_APPOINTMENT:
      return {
        ...state,
        appointments: setAppointment(state.appointments, action.payload),
      };
    case AttendanceTypes.SET_ATTENDANCE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case AttendanceTypes.SET_ATTENDANCE_TEACHER:
      return {
        ...state,
        teacher: action.payload,
      };
    case AttendanceTypes.SET_ATTENDANCE_LESSON:
      return {
        ...state,
        lesson: action.payload,
      };
    case AttendanceTypes.SAVE_ATTENDANCE_START:
      return {
        ...state,
        message: '',
      };
    case AttendanceTypes.SAVE_ATTENDANCE_SUCCESS:
      return {
        ...state,
        message: 'Chamada realizada com sucesso',
      };
    case AttendanceTypes.SAVE_ATTENDANCE_FAILURE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default attendanceReducer;
