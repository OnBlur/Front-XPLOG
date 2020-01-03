import { USERS } from '../users/types';

export function registrationReducer(state = {}, action) {
  switch (action.type) {
    case USERS.REGISTER_REQUEST:
      return { registering: true };
    case USERS.REGISTER_SUCCESS:
      return {};
    case USERS.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}