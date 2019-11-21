import { SET_ENTRIES } from "./types";

export const setEntries = data => {
  return { type: SET_ENTRIES, entries: data };
};
