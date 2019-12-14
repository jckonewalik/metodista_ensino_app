import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { getClassesSuccess, getClassesFailure } from './class.actions';
import ClassActionsType from './class.types';

export function* fetchClasses() {
  try {
    yield put(getClassesSuccess());
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
