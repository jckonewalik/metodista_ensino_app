import ClassActionsType from './class.types';

export const setCurrentClass = (selectedClass) => ({
  type: ClassActionsType.SET_CURRENT_CLASS,
  payload: selectedClass,
});
