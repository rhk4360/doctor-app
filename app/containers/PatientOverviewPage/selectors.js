/**
 * Patient list selectors
 */

import { createSelector } from 'reselect';

const selectOverview = (state) => state.get('overview');

const makeSelectPatient = () => createSelector(
  selectOverview,
  (overviewState) => overviewState.get('patient')
);

const makeSelectAppointments = () => createSelector(
  selectOverview,
  (overviewState) => overviewState.get('appointments')
);

const makeSelectPatientId = () => createSelector(
  selectOverview,
  (overviewState) => overviewState.get('patientId')
);

const makeSelectAppointmentToUpdate = () => createSelector(
  selectOverview,
  (overviewState) => overviewState.get('appointmentToUpdate')
);

const makeSelectDeclineReason = () => createSelector(
  selectOverview,
  (overviewState) => overviewState.get('declineReason')
);

export {
  selectOverview,
  makeSelectPatient,
  makeSelectPatientId,
  makeSelectAppointments,
  makeSelectAppointmentToUpdate,
  makeSelectDeclineReason,
};
