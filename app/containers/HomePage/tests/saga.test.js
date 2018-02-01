/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SIGN_IN } from '../constants';
import { signInSuccess, signInError } from '../actions';

import signInData, { signIn } from '../saga';

const username = 'admin';
const password = 'test1234';

/* eslint-disable redux-saga/yield-effects */
describe('signIn Saga', () => {
  let signInGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    signInGenerator = signIn();

    const selectDescriptor = signInGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = signInGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();

    const callDescriptor2 = signInGenerator.next(password).value;
    expect(callDescriptor2).toMatchSnapshot();
  });

  it('should dispatch the signInSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = signInGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(signInSuccess(response, username)));
  });

  it('should call the signInError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = signInGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(signInError(response)));
  });
});

describe('signInDataSaga Saga', () => {
  const signInDataSaga = signInData();

  it('should start task to watch for SIGN_IN action', () => {
    const takeLatestDescriptor = signInDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_IN, signIn));
  });
});
