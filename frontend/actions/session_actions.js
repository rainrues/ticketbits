import * as apiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_EMAIL = "RECEIVE_EMAIL";

export const login = (user) => (dispatch) => {
  return apiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)))
};

export const logout = () => (dispatch) => {
  return apiUtil.logout().then(() => dispatch(logoutCurrentUser()));
};  

export const signup = (user) => (dispatch) => {
  return apiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)));
};

export const check_email = (email) => (dispatch) => {
  return apiUtil.check_email(email).then((response) => dispatch(receiveEmail(response)));
};

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

export const receiveErrors = (errors) => {
  return ({
    type: "RECEIVE_ERRORS",
    errors: errors
  });
};

export const receiveEmail = ({email}) => {
  return ({
    type: "RECEIVE_EMAIL",
    email: email
  });
};