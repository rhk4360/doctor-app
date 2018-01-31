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
  GET_PATIENT_OVERVIEW,
  GET_PATIENT_OVERVIEW_SUCCESS,
  GET_PATIENT_OVERVIEW_ERROR,
  CANCEL_APPOINTMENT,
  UPDATE_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_ERROR,
  DECLINE_APPOINTMENT,
  DECLINE_APPOINTMENT_SUCCESS,
  DECLINE_APPOINTMENT_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  patient: null,
  appointments: null,
  patientId: null,
  appointmentToUpdate: null,
  declineReason: null,
});

function overviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENT_OVERVIEW:
      return state
        .set('loading', true)
        .set('patientId', action.id);
    case GET_PATIENT_OVERVIEW_SUCCESS:
      return state
        .set('loading', false)
        .set('patient', action.overview.user)
        .set('appointments', action.overview.appointments);
    case GET_PATIENT_OVERVIEW_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case CANCEL_APPOINTMENT:
      if (action.appointmentToUpdate) {
        console.log('cancel appt');
        let appointmentToUpdate = {...action.appointmentToUpdate,
          status: 'Canceled',
        };
        return state
          .set('loading', true)
          .set('appointmentToUpdate', appointmentToUpdate);
      } else {
        return false;
      }
    case UPDATE_APPOINTMENT_SUCCESS:
      const updatedAppointments = state.appointments.map(item => {
        if(item._id === state.cancelId) {
          return { ...item, ...action.updatedAppointment }
        }
        return item
      });

      return state
        .set('loading', false)
        .set('appointmentToUpdate', null)
        .set('declineReason', null)
        .set('appointments', updatedAppointments);
    case UPDATE_APPOINTMENT_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default overviewReducer;
