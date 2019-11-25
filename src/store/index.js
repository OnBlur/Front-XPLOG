import { SET_ENTRIES } from "./entries/types";
import { SET_MENU } from "./state/types";

const DEFAULT_SETINGS = {
  entries: null,
  menuState: true
};

const rootReducer = (state = DEFAULT_SETINGS, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return {
        ...state,
        entries: action.entries
      };
    case SET_MENU:
      return {
        ...state,
        menuState: action.menuState
      };
    default:
      return state;
  }
};

export default rootReducer;
