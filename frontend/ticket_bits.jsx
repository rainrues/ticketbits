import React from 'react';
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/Root';

// TESTING
import * as sessionApiUtil from './util/session_api_util';
import * as sessionActions from './actions/session_actions';
// TESTING

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // WHAT IS THIS SUPPOSED TO DO??

  // const store = configureStore();
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
  ReactDOM.render(<Root store={store} />, root);
});


// NOTE: use this when trying to test actions in console: window.dispatch(loginAction({ username: "rain", password: "password" }))