import ClassActionsType from './class.types';

const INITIAL_STATE = {
  currentClass: null,
  isLoading: true,
};

const classReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClassActionsType.SET_CURRENT_CLASS:
      return { ...state, currentClass: action.payload };
    case ClassActionsType.GET_CLASSES_START:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default classReducer;
