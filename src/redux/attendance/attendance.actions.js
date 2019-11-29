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
