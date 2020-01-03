import { combineReducers } from "redux";

import { stateReducer } from "./state.reducer";
import { entryReducer } from "./entries.reducer";
import { userReducer } from "./users.reducer";
import { authenticationReducer } from './authentication.reducer';
import { registrationReducer } from './registration.reducer';

const rootReducer = combineReducers({
  stateReducer,
  entryReducer,
  userReducer,
  authenticationReducer,
  registrationReducer
});

export default rootReducer;
