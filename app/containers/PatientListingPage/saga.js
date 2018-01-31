/**
 * Gets the repositories of the user from Github
 */
import { push } from 'react-router-redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PATIENT_LIST } from './constants';
import { getPatientsSuccess, getPatientsError } from './actions';

import request from 'utils/request';
import { makeSelectUsername, makeSelectPassword } from 'containers/App/selectors';

/**
 * Github repos request/response handler
 */
export function* getPatientsList() {
  console.log('fetchPatients');
  const requestURL = 'http://localhost:3000/getAllPatients';

  try {
    const list = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(getPatientsSuccess(list));
  } catch (err) {
    yield put(getPatientsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getPatientsData() {
  // Watches for FETCH_PATIENT_LIST actions and calls fetchPatients when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_PATIENT_LIST, getPatientsList);
}
