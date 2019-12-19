import {
  all, call, takeLatest, put, select,
} from 'redux-saga/effects';
import api from '../../services/api';
import { getClassesSuccess, getClassesFailure } from './class.actions';
import ClassActionsType from './class.types';
import { userTokenSelector } from '../user/user.selectors';

export function* fetchClasses() {
  try {
    const token = yield select(userTokenSelector);
    const response = yield api
      .get('/students-classes',
        { headers: { Authorization: `Bearer ${token}` } });
    const classes = yield response.data;
    yield put(getClassesSuccess(classes));
  } catch (error) {
    yield put(getClassesFailure(error));
  }
}

export function* onGetClassesStart() {
  yield takeLatest(ClassActionsType.GET_CLASSES_START, fetchClasses);
}

export default function* classSagas() {
  yield all([call(onGetClassesStart)]);
}
