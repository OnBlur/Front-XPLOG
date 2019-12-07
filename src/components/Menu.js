import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Menu = ({ children }) => {
  const menuState = useSelector(state => state.menuState);
  const dispatch = useDispatch();

  if (menuState) {
    console.log("Is menu open?", menuState);
    return (
      <div>
        <div className="menu">
          <div className="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jokes">Jokes</Link>
              </li>
            </ul>
          </div>
          <div className="close">
            <a className="icon" onClick={() => dispatch({ type: "SET_MENU" })}>
              X
            </a>
          </div>
        </div>
        <div className="container">{children}</div>
      </div>
    );
  } else {
    console.log("Is menu open?", menuState);
    return (
      <div>
        <div onClick={() => dispatch({ type: "SET_MENU" })}>Menu</div>
        <div className="container">{children}</div>
      </div>
    );
  }
};

export default Menu;
