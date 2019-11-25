import React from "react";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../store/state/settings";

const SideMenu = props => {
  const { menuState, openMenu, closeMenu } = props;

  if (menuState) {
    return (
      <div className="side-menu">
        <a className="close-icon" onClick={closeMenu}>
          X
        </a>
      </div>
    );
  }
  return <a onClick={openMenu}>MENU</a>;
};

const mapStateToProps = state => {
  return { menuState: state.menuState };
};

export default connect(mapStateToProps, {
  openMenu,
  closeMenu
})(SideMenu);
