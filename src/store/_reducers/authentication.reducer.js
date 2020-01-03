import { USERS } from '../users/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case USERS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case USERS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case USERS.LOGIN_FAILURE:
      return {};
    case USERS.LOGOUT:
      return {};
    default:
      return state
  }
}