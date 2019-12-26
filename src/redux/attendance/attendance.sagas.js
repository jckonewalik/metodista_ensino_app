import {
  all, call, takeLatest, put, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import {
  setAttendanceAppointments, saveAttendanceSuccess, saveAttendanceFailure,
  fetchLessonsListSuccess, fetchLessonsListFailure,
} from './attendance.actions';
import ClassActionsType from '../class/class.types';
import { selectCurrentAttendance } from './attendance.selectors';
import { selectCurrentClass } from '../class/class.selectors';
import AttendanceTypes from './attendance.types';
import { userTokenSelector } from '../user/user.selectors';


function* saveAttendance() {
  try {
    const attendance = yield select(selectCurrentAttendance);
    const studentsClass = yield select(selectCurrentClass);
    const token = yield select(userTokenSelector);
    yield api.post('/attendances',
      {
        date: attendance.date,
        StudentsClassId: studentsClass.id,
        TeacherId: attendance.teacher.id,
        LessonId: attendance.lesson && attendance.lesson.id,
        appointments: attendance.appointments.map(
          (appointment) => ({ StudentId: appointment.student.id, status: appointment.status }),
        ),
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

function* fetchLessonsList() {
  try {
    const studentsClass = yield select(selectCurrentClass);
    const token = yield select(userTokenSelector);
    const response = yield api.get(`courses/${studentsClass.CourseId}/lessons`,
      { headers: { Authorization: `Bearer ${token}` } });
    const { lessons } = yield response.data;
    yield put(fetchLessonsListSuccess(lessons));
  } catch (error) {
    yield put(fetchLessonsListFailure());
  }
}

export function* onSetCurrentClassSuccess() {
  yield takeLatest(ClassActionsType.SET_CURRENT_CLASS_SUCCESS, createAttendanceItems);
}

export function* onSaveAttendanceStart() {
  yield takeLatest(AttendanceTypes.SAVE_ATTENDANCE_START, saveAttendance);
}

export function* onFetchLessonsListStart() {
  yield takeLatest(AttendanceTypes.FETCH_LESSONS_LIST_START, fetchLessonsList);
}

export default function* attendanceSagas() {
  yield all([call(onSetCurrentClassSuccess),
    call(onSaveAttendanceStart),
    call(onFetchLessonsListStart)]);
}
