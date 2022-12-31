import { combineReducers } from "redux";
import {
  ADD_SEARCH_RESULT,
  ADD_USERS,
  HIDE_POPUP,
  SHOW_POPUP,
  UPDATE_FOLLOWERS_DETAILS,
  UPDATE_USER_DETAILS,
  SHOW_SPINNER,
  HIDE_SPINNER
} from "../actions/actionTypes";

const intialState = {
  userList: [],
  show: false,   //for showing popup
  current_user: {},
  user_details: {},
  followers: [],
  search_result:{},
  spinner:false
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
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        search_result: action.search_result,
      }; 
    case SHOW_SPINNER:
    return {
      ...state,
      spinner: action.spinner,
    };
  case HIDE_SPINNER:
    return {
      ...state,
      spinner: action.spinner,
    };    
    default:
      //   console.log("default switch case");
      return state;
  }
}

export default combineReducers({ users });
