import {
  GET_PATIENT_OVERVIEW,
  GET_PATIENT_OVERVIEW_SUCCESS,
  GET_PATIENT_OVERVIEW_ERROR,
  CANCEL_APPOINTMENT,
  UPDATE_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_ERROR,
  DECLINE_APPOINTMENT,
  CHANGE_DECLINE_REASON,
} from './constants';

/**
 * Gets a patient's details based on id
 *
 * @param id - patient's id in the system
 *
 * @return {object}    An action object with a type of GET_PATIENT_OVERVIEW
 */
export function getPatientOverview(id) {
  return {
    type: GET_PATIENT_OVERVIEW,
    id,
  };
}

/**
 * Successfully retrieved a patient overview
 *
 * @param {object} - patient details
 *
 * @return {object}    An action object with a type of GET_PATIENT_OVERVIEW_SUCCESS
 */
export function getPatientOverviewSuccess(overview) {
  return {
    type: GET_PATIENT_OVERVIEW_SUCCESS,
    overview,
  };
}

/**
 * An error occurred while trying get patient details
 *
 * @param {object} - error that occurred
 *
 * @return {object}    An action object with a type of GET_PATIENT_OVERVIEW_ERROR
 */
export function getPatientOverviewError(error) {
  return {
    type: GET_PATIENT_OVERVIEW_ERROR,
    error,
  };
}

/**
 * Cancel an appointment
 *
 * @param appointmentId - appointment id to update
 *
 * @return {object}    An action object with a type of CANCEL_APPOINTMENT
 */
export function cancelAppointment(appointmentId) {
  return {
    type: CANCEL_APPOINTMENT,
    appointmentId,
  };
}

/**
 * Canceled an appointment successfully
 *
 * @param updatedAppointment - newly updated appointment
 *
 * @return {object}    An action object with a type of CANCEL_APPOINTMENT_SUCCESS
 */
export function updateAppointmentSuccess(updatedAppointment) {
  return {
    type: UPDATE_APPOINTMENT_SUCCESS,
    updatedAppointment,
  };
}

/**
 * Cancel an appointment encountered an error
 *
 * @param error - error that ocurred during cancelation
 *
 * @return {object}    An action object with a type of CANCEL_APPOINTMENT_ERROR
 */
export function updateAppointmentError(error) {
  return {
    type: UPDATE_APPOINTMENT_ERROR,
    error,
  };
}

/**
 * Decline an appointment
 *
 * @param appointmentId - appointment id
 * @param declinedReason - reason for declining the appointment
 *
 * @return {object}    An action object with a type of DECLINE_APPOINTMENT
 */
export function declineAppointment(appointmentId, declinedReason) {
  return {
    type: DECLINE_APPOINTMENT,
    appointmentId,
    declinedReason,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_DECLINE_REASON
 */
export function changeDeclineReason(reason) {
  return {
    type: CHANGE_DECLINE_REASON,
    reason,
  };
}

