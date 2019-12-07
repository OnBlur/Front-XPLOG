import { ENTRIES } from "./entries/types";
import { SET_MENU } from "./state/types";

const DEFAULT_SETINGS = {
  entries: [
    {
      id: 1,
      title: "sunt aut facere repellat",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est",
      userId: 341
    },
    {
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil ",
      userId: 353
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem",
      body:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis",
      userId: 213
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda",
      userId: 345
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem",
      userId: 123
    }
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
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.id)
      };
    case ENTRIES.GETBYID:
      const entry = state.entries.find(entry => entry.id == action.id);
      return { ...state, entry };
    case SET_MENU:
      return {
        ...state,
        menuState: !state.menuState
      };
    default:
      return state;
  }
};

export default rootReducer;
