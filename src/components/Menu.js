import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../store/state/settings";

function Menu(props) {
  const { menuState, toggleMenu } = props;

  if (menuState) {
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
            <a className="icon" onClick={toggleMenu}>
              X
            </a>
          </div>
        </div>
        {props.children}
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={toggleMenu}>Menu</div>
        {props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menuState: state.menuState };
};

export default withRouter(
  connect(mapStateToProps, {
    toggleMenu
  })(Menu)
);
