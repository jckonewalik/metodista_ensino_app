import { createSelector } from 'reselect';

const selectAttendance = (state) => state.attendance;

export const selectAttendanceAppointments = createSelector(
  [selectAttendance],
  (attendance) => attendance.appointments,
);

export const selectAttendanceDate = createSelector(
  [selectAttendance],
  (attendance) => attendance.date,
);

export const selectAttendanceTeacher = createSelector(
  [selectAttendance],
  (attendance) => attendance.teacher,
);

export const selectAttendanceLesson = createSelector(
  [selectAttendance],
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
