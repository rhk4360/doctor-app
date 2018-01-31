/*
 * ListingReducer
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
  GET_PATIENT_LIST,
  GET_PATIENTS_SUCCESS,
  GET_PATIENTS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  patientList: [],
});

function listingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENT_LIST:
      return state
        .set('loading', true);
    case GET_PATIENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('patientList', action.list);
    case GET_PATIENTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default listingReducer;
