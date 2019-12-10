import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';
import { getClassesSuccess, getClassesFailure } from './class.actions';
import ClassActionsType from './class.types';

export function* fetchClasses() {
  try {
    const classesRef = yield firestore.collection('teacher_classes');
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
