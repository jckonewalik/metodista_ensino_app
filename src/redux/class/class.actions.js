import ClassActionsType from './class.types';

export const setCurrentClassStart = (selectedClass) => ({
  type: ClassActionsType.SET_CURRENT_CLASS_START,
  payload: selectedClass.id,
});

export const setCurrentClassSuccess = (studentsClass) => ({
  type: ClassActionsType.SET_CURRENT_CLASS_SUCCESS,
  payload: studentsClass,
});

export const setSetCurrentClassFailure = (error) => ({
  type: ClassActionsType.SET_CURRENT_CLASS_FAILURE,
  payload: error.message,
});

export const getClassesStart = () => ({
  type: ClassActionsType.GET_CLASSES_START,
});

export const getClassesSuccess = (classes) => ({
  type: ClassActionsType.GET_CLASSES_SUCCESS,
  payload: classes,
});

export const fetchClassStudentsStart = (classId) => ({
  type: ClassActionsType.FETCH_CLASS_STUDENTS_START,
  payload: classId,
});

export const getClassesFailure = (error) => ({
  type: ClassActionsType.GET_CLASSES_FAILURE,
  payload: error.message,
});
