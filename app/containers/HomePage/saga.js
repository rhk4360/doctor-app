/**
 * Gets the repositories of the user from Github
 */
import { push } from 'react-router-redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SIGN_IN } from './constants';
import { signInSuccess, signInError } from './actions';

import request from 'utils/request';
import { makeSelectUsername, makeSelectPassword } from './selectors';

/**
 * Github repos request/response handler
 */
export function* signIn() {
  // Select username and password from store
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  const requestURL = 'http://localhost:3000/login';

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    yield put(signInSuccess(user));
    // redirect to next page
    yield put(push('/list'));
  } catch (err) {
    yield put(signInError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signInData() {
  // Watches for SIGN_IN actions and calls signIn when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_IN, signIn);
}
