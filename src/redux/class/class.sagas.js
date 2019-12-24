import {
  all, call, takeLatest, put, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import {
  getClassesSuccess, getClassesFailure, setSetCurrentClassFailure, setCurrentClassSuccess,
} from './class.actions';
import ClassActionsType from './class.types';
import { userTokenSelector } from '../user/user.selectors';

export function* fetchClasses() {
  try {
    const token = yield select(userTokenSelector);
    const response = yield api
      .get('/students-classes',
        { headers: { Authorization: `Bearer ${token}` } });
    const { studentsClasses } = yield response.data;
    yield put(getClassesSuccess(studentsClasses));
  } catch (error) {
    yield put(getClassesFailure(error));
  }
}

function* fethStudentsClass({ payload: { id } }) {
  try {
    const token = yield select(userTokenSelector);
    const response = yield api
      .get(`/students-classes/${id}`,
        { headers: { Authorization: `Bearer ${token}` } });
    const { studentsClass } = yield response.data;
    yield put(setCurrentClassSuccess(studentsClass));
  } catch (error) {
    yield put(setSetCurrentClassFailure(error));
  }
}

export function* onSetCurrentClassStart() {
  yield takeLatest(ClassActionsType.SET_CURRENT_CLASS_START, fethStudentsClass);
}
export function* onGetClassesStart() {
  yield takeLatest(ClassActionsType.GET_CLASSES_START, fetchClasses);
}

export default function* classSagas() {
  yield all([call(onGetClassesStart), call(onSetCurrentClassStart)]);
}
