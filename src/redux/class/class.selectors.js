import { createSelector } from 'reselect';

const selectClass = (state) => state.classes;

export const selectCurrentClass = createSelector(
  [selectClass],
  (classes) => classes.currentClass,
);
