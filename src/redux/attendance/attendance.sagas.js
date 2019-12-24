import {
  all, call, takeLatest, put, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import {
  setAttendanceAppointments, saveAttendanceSuccess, saveAttendanceFailure,
} from './attendance.actions';
import ClassActionsType from '../class/class.types';
import { selectAttendance } from './attendance.selectors';
import { selectCurrentClass } from '../class/class.selectors';
import AttendanceTypes from './attendance.types';
import { userTokenSelector } from '../user/user.selectors';


function* saveAttendance() {
  try {
    const attendance = yield select(selectAttendance);
    const studentsClass = yield select(selectCurrentClass);
    const token = yield select(userTokenSelector);
    yield api.post('/attendances',
      {
        date: attendance.date,
        StudentsClassId: studentsClass.id,
        TeacherId: attendance.teacher.id,
        LessonId: attendance.lesson && attendance.lesson.id,
        appointments: attendance.appointments.map((appointment) => ({ StudentId: appointment.student.id, status: appointment.status })),
      }, { headers: { Authorization: `Bearer ${token}` } });
    yield put(saveAttendanceSuccess());
  } catch (error) {
    yield put(saveAttendanceFailure(error));
  }
}

function* createAttendanceItems() {
  const currentClass = yield select(selectCurrentClass);
  yield put(setAttendanceAppointments(
    currentClass.students.map((student) => ({ student, status: null })),
  ));
}

export function* onSetCurrentClassSuccess() {
  yield takeLatest(ClassActionsType.SET_CURRENT_CLASS_SUCCESS, createAttendanceItems);
}

export function* onSaveAttendanceStart() {
  yield takeLatest(AttendanceTypes.SAVE_ATTENDANCE_START, saveAttendance);
}

export default function* attendanceSagas() {
  yield all([call(onSetCurrentClassSuccess), call(onSaveAttendanceStart)]);
}
