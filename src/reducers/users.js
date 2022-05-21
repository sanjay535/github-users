import { combineReducers } from "redux";
import { ADD_USERS, HIDE_POPUP, SHOW_POPUP } from "../actions/actionTypes";

const intialState = {
  userList: [],
  show: false,
};

export function users(state = intialState, action) {
  console.log("action= ", action);
  switch (action.type) {
    case ADD_USERS:
      //   console.log("ADD_USERS switch case");
      return {
        ...state,
        userList: action.userList,
      };
    case SHOW_POPUP:
      return {
        ...state,
        show: action.show,
      };
    case HIDE_POPUP:
      return {
        ...state,
        show: action.show,
      };

    default:
      //   console.log("default switch case");
      return state;
  }
}

export default combineReducers({ users });
