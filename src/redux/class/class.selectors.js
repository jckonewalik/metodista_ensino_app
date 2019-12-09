import { createSelector } from 'reselect';

const selectClass = (state) => state.classes;

export const selectCurrentClass = createSelector(
  [selectClass],
  (classes) => classes.currentClass,
);

export const selectIsLoadingClassess = createSelector(
  [selectClass],
  (classes) => classes.isLoading,
);
