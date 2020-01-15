import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Menu = ({ children }) => {
  const menuState = useSelector(state => state.stateReducer.menuState);
  const dispatch = useDispatch();

  const routes = {
    Home: "/",
    Jokes: "/jokes",
    Login: "/login",
    Admin: "/admin",
    Register: "/register"
  };

  if (menuState) {
    console.log("Is menu open?", menuState);
    return (
      <div className="wrapper">
        <div className="menu">
          <div className="navigation">
            <ul>
              <li>
                <Link to={routes.Home}>Home</Link>
              </li>
              <li>
                <Link to={routes.Login}>Login</Link>
              </li>
              <li>
                <Link to={routes.Register}>Register</Link>
              </li>
              <li>
                <Link to={routes.Admin}>Admin</Link>
              </li>
              <li>
                <Link to={routes.Login}>Logout</Link>
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
      <div className="wrapper">
        <div onClick={() => dispatch({ type: "SET_MENU" })}>Menu</div>
        <div className="container">{children}</div>
      </div>
    );
  }
};

export default Menu;
