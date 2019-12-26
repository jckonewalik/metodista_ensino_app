import AttendanceTypes from './attendance.types';
import { setAppointment } from './attendance.utils';

const INITIAL_STATE = {
  currentAttendance: {
    date: new Date(),
    appointments: [],
    teacher: null,
    lesson: null,
  },
  message: '',
  hasError: false,
  lessons: [],
};

const attendanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AttendanceTypes.SET_ATTENDANCE_APPOINTMENTS:
      return {
        ...state,
        currentAttendance: { ...state.currentAttendance, appointments: action.payload },
      };
    case AttendanceTypes.SET_APPOINTMENT:
      return {
        ...state,
        currentAttendance:
        {
          ...state.currentAttendance,
          appointments: setAppointment(state.currentAttendance.appointments, action.payload),
        },
      };
    case AttendanceTypes.SET_ATTENDANCE_DATE:
      return {
        ...state,
        currentAttendance:
        {
          ...state.currentAttendance,
          date: action.payload,
        },
      };
    case AttendanceTypes.SET_ATTENDANCE_TEACHER:
      return {
        ...state,
        currentAttendance:
        {
          ...state.currentAttendance,
          teacher: action.payload,
        },
      };
    case AttendanceTypes.SET_ATTENDANCE_LESSON:
      return {
        ...state,
        currentAttendance:
        {
          ...state.currentAttendance,
          lesson: action.payload,
        },
      };
    case AttendanceTypes.SAVE_ATTENDANCE_START:
      return {
        ...state,
        message: '',
      };
    case AttendanceTypes.SAVE_ATTENDANCE_SUCCESS:
      return {
        ...INITIAL_STATE,        
        message: 'Chamada realizada com sucesso',
      };
    case AttendanceTypes.SAVE_ATTENDANCE_FAILURE:
      return {
        ...state,
        hasError: true,
        message: action.payload,
      };
    case AttendanceTypes.FETCH_LESSONS_LIST_SUCCESS:
      return {
        ...state,
        lessons: action.payload,
      };
    case AttendanceTypes.CLEAR_ATTENDANCE_MESSAGE:
      return {
        ...state,
        message: ''
      }
    default:
      return state;
  }
};

export default attendanceReducer;
