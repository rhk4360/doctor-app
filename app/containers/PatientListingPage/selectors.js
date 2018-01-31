/**
 * Patient list selectors
 */

import { createSelector } from 'reselect';

const selectList = (state) => state.get('list');

const makeSelectPatientList = () => createSelector(
  selectList,
  (patientState) => patientState.get('patientList')
);

export {
  selectList,
  makeSelectPatientList,
};
