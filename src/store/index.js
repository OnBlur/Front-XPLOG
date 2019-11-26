import { ENTRIES } from "./entries/types";
import { SET_MENU } from "./state/types";

const DEFAULT_SETINGS = {
  entries: null,
  menuState: true
};

const rootReducer = (state = DEFAULT_SETINGS, action) => {
  switch (action.type) {
    case ENTRIES.FETCH_SUCCESS:
      return {
        ...state,
        entries: action.data
      };
    case ENTRIES.FETCH_ERROR:
      return {
        ...state,
        message: action.message
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
