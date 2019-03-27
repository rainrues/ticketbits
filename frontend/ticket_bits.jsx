import React from 'react';
import ReactDOM from 'react-dom'; 

// TESTING
import * as sessionApiUtil from './util/session_api_util';
// TESTING

document.addEventListener("DOMContentLoaded", () => {
  // TESTING
  window.signup = sessionApiUtil.signup;
  window.login = sessionApiUtil.login;
  window.logout = sessionApiUtil.logout;
  // TESTING
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to TicketBits!</h1>, root);
});