import { ENTRIES } from "../entries/types";

const DEFAULT_SETINGS = {
  entries: [
    {
      id: 1,
      title: "Why do we use it?",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      date: "9-Dec-2019",
      userId: 341
    },
    {
      id: 2,
      title: "Where can I get some?",
      body:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      date: "22-Dec-2019",
      userId: 353
    },
    {
      id: 3,
      title: "Where does it come from?",
      body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      date: "1-Jan-2020",
      userId: 213
    },
    {
      id: 4,
      title: "What is Lorem Ipsum?",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "9-Jan-2020",
      userId: 345
    }
  ]
};

export function entryReducer(state = DEFAULT_SETINGS, action) {
  switch (action.type) {
    case ENTRIES.FETCH_SUCCESS:
      // Fetch users from api
      return {
        ...state,
        entries: action.data
      };
    case ENTRIES.FETCH_ERROR:
      // Fetch error
      return {
        ...state,
        message: action.message
      };
    case ENTRIES.ADD:
      // Add user to state
      return {
        ...state,
        entries: [...state.entries, action.data]
      };
    case ENTRIES.EDIT:
      // Edit user in state
      const updatedItems = state.entries.map(entry => {
        if (entry.id === action.data.id) {
          return { ...entry, ...action.data };
        }
        return entry;
      });
      return { ...state, entries: updatedItems };
    case ENTRIES.REMOVE:
      // Remove user from state
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.id)
      };
    case ENTRIES.GETBYID:
      // Get user by id
      const entry = state.entries.find(entry => entry.id == action.id);
      return { ...state, entry };
    default:
      return state;
  }
}
