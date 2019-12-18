import { SET_MENU } from "../state/types";

export function stateReducer(state = { menuState: true }, action) {
  switch (action.type) {
    case SET_MENU:
      // Toggle menu state
      return {
        ...state,
        menuState: !state.menuState
      };
    default:
      return state;
  }
}
