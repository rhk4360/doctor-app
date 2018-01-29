/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectPassword = () => createSelector(
  selectHome,
  (homeState) => homeState.get('password')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectPassword,
};
