
import {
  GET_PATIENT_LIST,
  GET_PATIENTS_SUCCESS,
  GET_PATIENTS_ERROR,
} from './constants';

/**
 * Gets a list of patients 
 *
 *
 * @return {object}    An action object with a type of FETCH_PATIENT_LIST
 */
export function getPatientsList() {
  console.log('retrievePatients');
  return {
    type: GET_PATIENT_LIST,
  };
};

/**
 * Successfully retrieved a list of patients 
 *
 * @param {array} - array of patients
 *
 * @return {object}    An action object with a type of GET_PATIENTS_SUCCESS
 */
export function getPatientsSuccess(list) {
  return {
    type: GET_PATIENTS_SUCCESS,
    list: list,
  };
};

/**
 * An error occurred while trying to fetch patients 
 *
 * @param {object} - error that occurred
 *
 * @return {object}    An action object with a type of GET_PATIENTS_ERROR
 */
export function getPatientsError(error) {
  return {
    type: GET_PATIENTS_ERROR,
    error: error,
  };
};

