/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function signIn() {
  return {
    type: SIGN_IN,
  };
}

/**
 * Dispatched when signing in is successful
 *
 * @param  {object} user The current user
 *
 * @return {object}      An action object with a type of SIGN_IN_SUCCESS passing the repos
 */
export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user,    
  };
}

/**
 * Dispatched when signing in fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SIGN_IN_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: SIGN_IN_ERROR,
    error,
  };
}
