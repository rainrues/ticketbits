import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL } from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return merge({}, oldState, { id: null });
    case RECEIVE_EMAIL:
    debugger
      return merge({}, oldState, { email: action.email, match: action.match });
    default:
      return oldState;
  }
};

export default sessionReducer;
