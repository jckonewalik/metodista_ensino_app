import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import UserTypes from './user.types';
import { signInFailure, signInSuccess } from './user.actions';
import {
  auth,
  getUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth) {
  const snapshot = yield call(getUserProfileDocument, userAuth);
  yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart),
    call(onCheckUserSession)]);
}
