import { ENTRIES } from "./types";
import API from "../api";

export const fetchEntriesSuccess = data => {
  return { type: ENTRIES.FETCH_SUCCESS, data };
};

export const fetchEntriesError = error => {
  return { type: ENTRIES.FETCH_ERROR, message: error.message };
};

export const addEntry = data => {
  return { type: ENTRIES.ADD, data };
};

export const removeEntry = id => {
  return { type: ENTRIES.REMOVE, id };
};

//Fetching entries
export const fetchEntries = () => dispatch => {
  return API.get(`posts`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Unsuccessful request to deckofcardsapi.com");
      }
      return response.data;
    })
    .then(data => dispatch(fetchEntriesSuccess(data)))
    .catch(error => dispatch(fetchEntriesError(error)));
};
