import * as sessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_EMAIL = "RECEIVE_EMAIL";

export const login = (user) => (dispatch) => {
  return sessionApiUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
};

export const logout = () => (dispatch) => {
  return sessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
};  

export const signup = (user) => (dispatch) => {
  return sessionApiUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
};

export const check_email = (email) => (dispatch) => {
  return sessionApiUtil.check_email(email).then(
    (response) => dispatch(receiveEmail(response)));
};

// REMOVE THIS 
// ADD ACTION AND REDUCER FOR CLEAR ERRORS
// STYLE ERRORS
// BREAKOUT FORM INPUTS WITH STYLE FROM STEPH

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: "RECEIVE_CURRENT_USER",
    currentUser: currentUser
  });
};

export const logoutCurrentUser = () => {
  return ({
    type: 'LOGOUT_CURRENT_USER'
  });
};

export const receiveSessionErrors = (errors) => {
  return ({
    type: "RECEIVE_SESSION_ERRORS",
    errors: errors
  });
};

export const receiveEmail = ({email, match}) => {
  return ({
    type: "RECEIVE_EMAIL",
    email: email, 
    match: match
  });
};