import merge from 'lodash/merge';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { errors: null });
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;