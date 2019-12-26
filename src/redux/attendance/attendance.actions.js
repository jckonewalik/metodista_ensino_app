import AttendanceTypes from './attendance.types';

export const setAttendanceAppointments = (appointments) => ({
  type: AttendanceTypes.SET_ATTENDANCE_APPOINTMENTS,
  payload: appointments,
});

export const setAppointment = (appointment) => ({
  type: AttendanceTypes.SET_APPOINTMENT,
  payload: appointment,
});

export const setAttendanceDate = (date) => ({
  type: AttendanceTypes.SET_ATTENDANCE_DATE,
  payload: date,
});

export const setAttendanceTeacher = (teacher) => ({
  type: AttendanceTypes.SET_ATTENDANCE_TEACHER,
  payload: teacher,
});

export const setAttendanceLesson = (lesson) => ({
  type: AttendanceTypes.SET_ATTENDANCE_LESSON,
  payload: lesson,
});

export const saveAttendanceStart = (attendance) => ({
  type: AttendanceTypes.SAVE_ATTENDANCE_START,
  payload: attendance,
});

export const saveAttendanceSuccess = () => ({
  type: AttendanceTypes.SAVE_ATTENDANCE_SUCCESS,
});

export const saveAttendanceFailure = (error) => ({
  type: AttendanceTypes.SAVE_ATTENDANCE_FAILURE,
  payload: error.message,
});

export const fetchLessonsListStart = () => ({
  type: AttendanceTypes.FETCH_LESSONS_LIST_START,
});

export const fetchLessonsListSuccess = (lessons) => ({
  type: AttendanceTypes.FETCH_LESSONS_LIST_SUCCESS,
  payload: lessons,
});

export const fetchLessonsListFailure = () => ({
  type: AttendanceTypes.FETCH_LESSONS_LIST_FAILURE,
});
