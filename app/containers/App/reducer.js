/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN,
  SIGN_IN_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  console.log("appReducer " + JSON.stringify(action.user));
  switch (action.type) {
    case SIGN_IN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('currentUser', false);
    case SIGN_IN_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', action.user);
    case SIGN_IN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
