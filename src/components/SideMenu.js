import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../store/state/settings";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (menuState) {
      return (
        <div>
          <div className="side-menu">
            <a className="close-icon" onClick={closeMenu}>
              X
            </a>
            <div>
              <Link to="/">Home</Link>
              <Link to="/jokes">Jokes</Link>
              <Link to="/music-master">Music Master</Link>
            </div>
          </div>
          {children}
        </div>
      );
    }
    return (
      <div>
        <div className="side-menu">
          <a onClick={openMenu}>MENU</a>
          <div>
            <Link to="/">Home</Link>
            <Link to="/jokes">Jokes</Link>
            <Link to="/music-master">Music Master</Link>
          </div>
        </div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menuState: state.menuState };
};

export default connect(mapStateToProps, {
  openMenu,
  closeMenu
})(SideMenu);
