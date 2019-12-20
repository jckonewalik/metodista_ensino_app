import ClassActionsType from './class.types';

const INITIAL_STATE = {
  currentClass: null,
  errorMessage: '',
  myClasses: [],
  isFechingCurrentClass: true,
  isFechingClasses: true,
};

const classReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClassActionsType.SET_CURRENT_CLASS_START:
      return { ...state, isFechingCurrentClass: true };
    case ClassActionsType.SET_CURRENT_CLASS_SUCCESS:
      return { ...state, isFechingCurrentClass: false, currentClass: action.payload };
    case ClassActionsType.SET_CURRENT_CLASS_FAILURE:
      return {
        ...state, isFechingCurrentClass: false, currentClass: null, errorMessage: action.payload,
      };
    case ClassActionsType.GET_CLASSES_START:
      return { ...state, isFechingClasses: true };
    case ClassActionsType.GET_CLASSES_SUCCESS:
      return {
        ...state,
        isFechingClasses: false,
        myClasses: action.payload,
      };
    case ClassActionsType.GET_CLASSES_FAILURE:
      return {
        ...state,
        isFechingClasses: false,
        errorMessage: action.payload,
        myClasses: [],
      };
    default:
      return state;
  }
};

export default classReducer;
