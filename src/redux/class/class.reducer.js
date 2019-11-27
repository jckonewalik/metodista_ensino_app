import ClassActionsType from './class.types';

const INITIAL_STATE = {
  currentClass: null,
};

const classReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClassActionsType.SET_CURRENT_CLASS:
      return { ...state, currentClass: action.payload };
    default:
      return state;
  }
};

export default classReducer;
