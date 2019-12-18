import { combineReducers } from "redux";

import { entryReducer } from "./entries.reducer";
import { stateReducer } from "./state.reducer";

const rootReducer = combineReducers({
  entryReducer,
  stateReducer
});

export default rootReducer;
