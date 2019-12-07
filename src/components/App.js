import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchEntries } from "../store/entries/settings";

import Entries from "./Entries/Entries";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntries());
  }, []);

  return <Entries />;
};

export default App;
