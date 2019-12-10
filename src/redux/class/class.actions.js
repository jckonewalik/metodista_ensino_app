import ClassActionsType from './class.types';

export const setCurrentClass = (selectedClass) => ({
  type: ClassActionsType.SET_CURRENT_CLASS,
  payload: selectedClass,
});

export const getClassesStart = () => ({
  type: ClassActionsType.GET_CLASSES_START,
});

export const getClassesSuccess = (classes) => ({
  type: ClassActionsType.GET_CLASSES_SUCCESS,
  payload: classes,
});

export const getClassesFailure = (error) => ({
  type: ClassActionsType.GET_CLASSES_FAILURE,
  payload: error.message,
});
