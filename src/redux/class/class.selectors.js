import { createSelector } from 'reselect';

const selectClass = (state) => state.classes;

export const selectCurrentClass = createSelector(
  [selectClass],
  (classes) => classes.currentClass,
);

export const selectTeachersCurrentClass = createSelector(
  [selectCurrentClass],
  (currentClass) => currentClass.teachers,
);

export const selectIsFechingClasses = createSelector(
  [selectClass],
  (classes) => classes.isFechingClasses,
);
export const selectIsFechingCurrentClass = createSelector(
  [selectClass],
  (classes) => classes.isFechingCurrentClass,
);
export const selectMyClasses = createSelector(
  [selectClass],
  (classes) => classes.myClasses,
);
