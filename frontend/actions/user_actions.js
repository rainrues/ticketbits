import * as userApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = (userId) => (dispatch) => {
  return userApiUtil.fetchUser(userId).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveUserErrors(errors.responseJSON)));
};

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user
});