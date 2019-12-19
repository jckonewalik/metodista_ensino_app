import { createSelector } from 'reselect';

const userSelector = (state) => state.user;

export const currentUserSelector = createSelector(
  [userSelector],
  (user) => user.currentUser,
);

export const errorMessageSelector = createSelector(
  [userSelector],
  (user) => user.error,
);

export const userTokenSelector = createSelector(
  [currentUserSelector],
  (currentUser) => currentUser.token,
);
