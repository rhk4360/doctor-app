/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 */

import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

/**
 * Attempts to sign the user in
 *
 * @return {object}    An action object with a type of SIGN_IN
 */
export function signIn() {
  return {
    type: SIGN_IN,
  };
}

/**
 * Successful sign in
 *
 * @param  {user} user that signed in
 *
 * @return {object}    An action object with a type of SIGN_IN_SUCCESS
 */
export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user,
  };
}

/**
 * Error during sign in
 *
 * @return {object}    An action object with a type of SIGN_IN_ERROR
 */
export function signInError() {
  return {
    type: SIGN_IN_ERROR,
  };
}
