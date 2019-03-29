import React from 'react';
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/Root';

// TESTING
import * as sessionApiUtil from './util/session_api_util';
import * as sessionActions from './actions/session_actions';
// TESTING

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = sessionApiUtil.signup;
  window.login = sessionApiUtil.login;
  window.logout = sessionApiUtil.logout;
  window.loginAction = sessionActions.login;
  window.logoutAction = sessionActions.logout;
  window.signupAction = sessionActions.signup;
  // TESTING
  const root = document.getElementById('root');
  // ReactDOM.render(<h1>Welcome to Ticket Bits!</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});


// NOTE: use this when trying to test actions in console: window.dispatch(loginAction({ username: "rain", password: "password" }))