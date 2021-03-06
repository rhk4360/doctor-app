/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'boilerplate/Home/CHANGE_PASSWORD';
export const SIGN_IN = 'boilerplate/Home/SIGN_IN';
export const SIGN_IN_SUCCESS = 'boilerplate/Home/SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'boilerplate/Home/SIGN_IN_ERROR';
