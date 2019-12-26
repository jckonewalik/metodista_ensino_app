import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import UserTypes from './user.types';
import api from '../../services/api';
import { signInFailure, signInSuccess } from './user.actions';

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

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
