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
};

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
};

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
};

/**
 * Cancel an appointment
 *
 * @param appointmentToUpdate - appointment to update
 *
 * @return {object}    An action object with a type of CANCEL_APPOINTMENT
 */
export function cancelAppointment(appointmentToUpdate) {
  return {
    type: CANCEL_APPOINTMENT,
    appointmentToUpdate,
  }
};

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
  }
};

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
  }
};

/**
 * Decline an appointment
 *
 * @param id - appointment id
 * @param reason - reason for declining the appointment
 *
 * @return {object}    An action object with a type of DECLINE_APPOINTMENT
 */
export function declineAppointment(id, reason) {
  return {
    type: DECLINE_APPOINTMENT,
    id,
    reason,
  }
};

/**
 * Decline an appointment successfully
 *
 * @param updatedAppointment - newly updated appointment
 *
 * @return {object}    An action object with a type of DECLINE_APPOINTMENT_SUCCESS
 */
export function declineAppointmentSuccess(updatedAppointment) {
  return {
    type: DECLINE_APPOINTMENT_SUCCESS,
    id,
    reason,
  }
};

/**
 * Decline an appointment
 *
 * @param error - error that occurred when attempting to decline appointment
 *
 * @return {object}    An action object with a type of DECLINE_APPOINTMENT_ERROR
 */
export function declineAppointmentError(error) {
  return {
    type: DECLINE_APPOINTMENT_ERROR,
    error,
  }
};
