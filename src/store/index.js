import { SET_ENTRIES } from "./entries/types";
import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from "./state/types";

const DEFAULT_SETINGS = {
  entries: null,
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducer = (state = DEFAULT_SETINGS, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return {
        entries: action.entries
      };
    case SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted
      };
    case SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      };
    default:
      return state;
  }
};

export default rootReducer;
