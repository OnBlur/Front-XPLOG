import React from "react";

import Menu from "./Menu";

export const App = ({ children }) => {
  return (
    <div className="wrapper">
      <Menu />
      <div className="row">{children}</div>
    </div>
  );
};

export default App;
