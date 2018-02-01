/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_PATIENT_LIST } from '../constants';
import { getPatientsSuccess, getPatientsError } from '../actions';

import getPatientsData, { getPatientsList } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPatientsData Saga', () => {
  let getPatientsGenerator;
  const username = 'admin';
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getPatientsGenerator = getPatientsList();

    const selectDescriptor = getPatientsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getPatientsGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getPatientsSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'Hello',
    }, {
      name: 'Good Bye',
    }];
    const putDescriptor = getPatientsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPatientsSuccess(response, username)));
  });

  it('should call the getPatientsError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPatientsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getPatientsError(response)));
  });
});

describe('getPatientsDataSaga Saga', () => {
  it('should start task to watch for GET_PATIENT_LIST action', () => {
    const takeLatestDescriptor = getPatientsData.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_PATIENT_LIST, getPatientsData));
  });
});
