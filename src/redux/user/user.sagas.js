import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import UserTypes from './user.types';
import { signInFailure, signInSuccess } from './user.actions';
import { auth, getUserProfileDocument } from '../../firebase/firebase.utils';

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

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, emailSignIn);
}
export default function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
