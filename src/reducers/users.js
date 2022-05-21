import { combineReducers } from "redux";
import {
  ADD_USERS,
  HIDE_POPUP,
  SHOW_POPUP,
  UPDATE_FOLLOWERS_DETAILS,
  UPDATE_USER_DETAILS,
} from "../actions/actionTypes";

const intialState = {
  userList: [],
  show: false,
  current_user: {},
  user_details: {},
  followers: [],
};

export function users(state = intialState, action) {
  // console.log("action= ", action);
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
        current_user: action.current_user,
      };
    case HIDE_POPUP:
      return {
        ...state,
        show: action.show,
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        user_details: action.user_details,
      };
    case UPDATE_FOLLOWERS_DETAILS:
      return {
        ...state,
        followers: action.followers,
      };
    default:
      //   console.log("default switch case");
      return state;
  }
}

export default combineReducers({ users });
