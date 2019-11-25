import { SET_ENTRIES } from "./types";
import API from "../../api";

export const setEntries = data => {
  return { type: SET_ENTRIES, entries: data };
};

export const fetchEntriesSuccess = entryJson => {
  console.log("gas");
  const { id, title, body } = entryJson;

  return { type: ENTRIES.FETCH_SUCCESS, id, title, body };
};

export const fetchEntriesError = error => {
  return { type: ENTRIES.FETCH_ERROR, message: error.message };
};

//Fetching entries
export const fetchEntries = () => dispatch => {
  return API.get(`posts`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Unsuccessful request to deckofcardsapi.com");
      }
      return response.json();
    })
    .then(json => dispatch(setEntries(json)))
    .catch(error => dispatch(fetchEntriesError(error)));
};
