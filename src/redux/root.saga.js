import { all, call } from 'redux-saga/effects';
import userSagas from './user/user.sagas';
import classSagas from './class/class.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(classSagas)]);
}
