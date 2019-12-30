import {
  all, call, takeLatest, put, select
} from 'redux-saga/effects';
import UserTypes from './user.types';
import api from '../../services/api';
import { userTokenSelector } from './user.selectors';
import { signInFailure, signInSuccess, checkUserSessionSuccess, checkUserSessionFailure } from './user.actions';

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const response = yield api.post('/sessions', { email, password });
    const { user } = yield response.data;
    yield put(signInSuccess(user));
  } catch (error) {
    const responseError = yield error.response.data;
    yield put(signInFailure(responseError));
  }
}

export function* checkUserSession() {
  try {
    const token = yield select(userTokenSelector);
    yield api.get('/sessions', { headers: { Authorization: `Bearer ${token}` } });    
    yield put(checkUserSessionSuccess());
  } catch (error) {        
    yield put(checkUserSessionFailure());
  }
}

export function* oncheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION_START, checkUserSession);
}
export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart),call(oncheckUserSession)]);
}
