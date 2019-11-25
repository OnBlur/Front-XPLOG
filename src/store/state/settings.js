import { SET_MENU } from "./types";

export const openMenu = () => {
  return { type: SET_MENU, menuState: true };
};

export const closeMenu = () => {
  return { type: SET_MENU, menuState: false };
};
