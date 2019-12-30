import UserTypes from './user.types';

export const emailSignInStart = (userAuth) => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: userAuth,
});

export const signInSuccess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: error.message,
});

export const checkUserSessionStart = () => ({
  type: UserTypes.CHECK_USER_SESSION_START,
});

export const checkUserSessionSuccess = () => ({
  type: UserTypes.CHECK_USER_SESSION_SUCCESS,
});
export const checkUserSessionFailure = () => ({
  type: UserTypes.CHECK_USER_SESSION_FAILURE,
});
