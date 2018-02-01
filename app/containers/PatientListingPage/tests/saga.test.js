/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_PATIENT_LIST } from '../constants';
import { getPatientsSuccess, getPatientsError } from '../actions';

import signInData, { getRepos } from '../saga';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('getPatientsData Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getPatientsSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'Hello',
    }, {
      name: 'Good Bye',
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPatientsSuccess(response, username)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(repoLoadingError(response)));
  });
});

describe('signInDataSaga Saga', () => {

  it('should start task to watch for GET_PATIENT_LIST action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
  });
});
