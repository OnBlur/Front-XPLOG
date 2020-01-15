import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Menu = () => {
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
      <div className="navbar">
        <div className="navigation">
          <Link to={routes.Home}>Home</Link>
          <Link to={routes.Login}>Login</Link>
          <Link to={routes.Register}>Register</Link>
          <Link to={routes.Admin}>Admin</Link>
          <Link to={routes.Login}>Logout</Link>
        </div>
        <div className="close">
          <a className="icon" onClick={() => dispatch({ type: "SET_MENU" })}>
            X
          </a>
        </div>
      </div>
    );
  } else {
    console.log("Is menu open?", menuState);
    return <div onClick={() => dispatch({ type: "SET_MENU" })}>Menu</div>;
  }
};

export default Menu;
