import { createSelector } from 'reselect';

export const selectAttendance = (state) => state.attendance;

export const selectCurrentAttendance = createSelector(
  [selectAttendance],
  (attendance) => attendance.currentAttendance,
);

export const selectAttendanceMessage = createSelector(
  [selectAttendance],
  (attendance) => attendance.message,
);

export const selectAttendanceLessons = createSelector(
  [selectAttendance],
  (attendance) => attendance.lessons,
);

export const selectAttendanceAppointments = createSelector(
  [selectCurrentAttendance],
  (attendance) => attendance.appointments,
);

export const selectAttendanceDate = createSelector(
  [selectCurrentAttendance],
  (attendance) => attendance.date,
);

export const selectAttendanceTeacher = createSelector(
  [selectCurrentAttendance],
  (attendance) => attendance.teacher,
);

export const selectAttendanceLesson = createSelector(
  [selectCurrentAttendance],
  (attendance) => attendance.lesson,
);

export const selectStudentsRemaining = createSelector(
  [selectAttendanceAppointments],
  (appointments) => appointments.reduce(
    (acc, appointment) => acc + (appointment.status === null ? 1 : 0), 0,
  ),
);

export const selectStudentsPresents = createSelector(
  [selectAttendanceAppointments],
  (appointments) => appointments.reduce(
    (acc, appointment) => acc + (appointment.status === true && 1), 0,
  ),
);

export const selectStudentsMissing = createSelector(
  [selectAttendanceAppointments],
  (appointments) => appointments.reduce(
    (acc, appointment) => acc + (appointment.status === false && 1), 0,
  ),
);

export const selectAttendancesComplete = createSelector(
  [selectStudentsRemaining],
  (remaining) => remaining === 0,
);
