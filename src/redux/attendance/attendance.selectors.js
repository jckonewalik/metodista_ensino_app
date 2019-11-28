import { createSelector } from 'reselect';

const selectAttendance = (state) => state.attendance;

export const selectAttendanceStudents = createSelector(
  [selectAttendance],
  (attendance) => attendance.students,
);

export const selectStudentsRemaining = createSelector(
  [selectAttendanceStudents],
  (students) => students.reduce((acc, student) => (acc + student.status ? 0 : 1), 0),
);

export const selectStudentsPresents = createSelector(
  [selectAttendanceStudents],
  (students) => students.reduce((acc, student) => (acc + student.status === true ? 1 : 0), 0),
);

export const selectStudentsMissing = createSelector(
  [selectAttendanceStudents],
  (students) => students.reduce((acc, student) => (acc + student.status === false ? 1 : 0), 0),
);
