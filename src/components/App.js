import React from "react";

import SideMenu from "./SideMenu";
import Entries from "./Entries";

export default function App() {
  return (
    <div className="container-fluid">
      <SideMenu />
      <Entries />
    </div>
  );
}
