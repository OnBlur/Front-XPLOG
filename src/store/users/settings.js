import { USERS } from "./types";
import { userService } from "../../_services";
// import { alertActions } from "./";
// import { history } from "../../_helpers";

export const login = (username, password, history ) => {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        console.log("send to login");
        history.push("/");
      },
      error => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: USERS.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: USERS.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: USERS.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  userService.logout();
  return { type: USERS.LOGOUT };
};

export const register = (user, history) => {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success());
        history.push("/login");
        // dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: USERS.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: USERS.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: USERS.REGISTER_FAILURE, error };
  }
};

export const getAll = () => {
  return dispatch => {
    dispatch(request());

    userService.getAll().then(
      users => dispatch(success(users)),
      error => dispatch(failure(error))
    );
  };

  function request() {
    return { type: USERS.GETALL_REQUEST };
  }
  function success(users) {
    return { type: USERS.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: USERS.GETALL_FAILURE, error };
  }
};

export const removeUser = id => {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id).then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: USERS.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: USERS.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: USERS.DELETE_FAILURE, id, error };
  }
};
