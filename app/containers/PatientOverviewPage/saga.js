/**
 * Gets the repositories of the user from Github
 */
import { push } from 'react-router-redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PATIENT_OVERVIEW, CANCEL_APPOINTMENT, DECLINE_APPOINTMENT } from './constants';
import { getPatientOverviewSuccess, 
         getPatientOverviewError, 
         updateAppointmentSuccess,
         updateAppointmentError } from './actions';

import request from 'utils/request';
import { makeSelectPatientId, makeSelectAppointmentToUpdate } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getPatientOverview() {
  const patientId = yield select(makeSelectPatientId());
  const requestURL = `http://localhost:3000/user/${patientId}`;

  try {
    const overview = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(getPatientOverviewSuccess(overview));
  } catch (err) {
    yield put(getPatientOverviewError(err));
  }
}

export function* updateAppointment() {
  const appointmentToUpdate = yield select(makeSelectAppointmentToUpdate());
  const requestURL = 'http://localhost:3000/updateAppointment';

  try {
    const updatedAppointment = yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appointment: appointmentToUpdate,
      }),
    });
    yield put(updateAppointmentSuccess(updatedAppointment));
  } catch (err) {
    yield put(updateAppointmentError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getPatientOverviewData() {
  // Watches for GET_PATIENT_OVERVIEW actions and calls getPatientOverview when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_PATIENT_OVERVIEW, getPatientOverview);
  yield takeLatest(CANCEL_APPOINTMENT, updateAppointment);
  yield takeLatest(DECLINE_APPOINTMENT, updateAppointment);
}
