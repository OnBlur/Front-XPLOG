import { ENTRIES } from "./entries/types";
import { SET_MENU } from "./state/types";

const DEFAULT_SETINGS = {
  entries: [
    {
      body: "leeg body #1",
      id: 9332420,
      title: "leeg title #1",
      userId: 13432
    },
    { body: "leeg body #2", id: 9332330, title: "leeg title #2", userId: 13332 }
  ],
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
    case ENTRIES.ADD:
      return {
        ...state,
        entries: [...state.entries, action.data]
      };
    case ENTRIES.EDIT:
      const updatedItems = state.entries.map(entry => {
        if (entry.id === action.data.id) {
          return { ...entry, ...action.data };
        }
        return entry;
      });
      return { ...state, entries: updatedItems };
    case ENTRIES.REMOVE:
      const id = action.id;
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== id)
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
