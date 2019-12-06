import UserTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: { hasError: false, message: '' },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: { hasError: false, message: '' },
      };
    case UserTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: { hasError: true, message: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
