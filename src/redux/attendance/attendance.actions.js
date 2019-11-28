import AttendanceTypes from './attendance.types';

export const setAttendanceStudents = (students) => ({
  type: AttendanceTypes.SET_ATTENDANCE_STUDENTS,
  payload: students,
});
