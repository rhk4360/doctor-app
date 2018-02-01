/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_PATIENT_LIST } from './constants';
import { getPatientsSuccess, getPatientsError } from './actions';
import { config } from '../../config/config';
/**
 * Github repos request/response handler
 */
export function* getPatientsList() {
  const requestURL = `${config.apiUrl}getAllPatients`;

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
