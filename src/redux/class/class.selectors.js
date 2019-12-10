import { createSelector } from 'reselect';

const selectClass = (state) => state.classes;

export const selectCurrentClass = createSelector(
  [selectClass],
  (classes) => classes.currentClass,
);

export const selectIsLoadingClasses = createSelector(
  [selectClass],
  (classes) => classes.isLoading,
);

export const selectMyClasses = createSelector(
  [selectClass],
  (classes) => classes.myClasses,
);
