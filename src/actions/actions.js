import {
  ADD_USERS,
  HIDE_POPUP,
  SHOW_POPUP,
  UPDATE_FOLLOWERS_DETAILS,
  UPDATE_USER_DETAILS,
} from "./actionTypes";

export function addUsers(userList = []) {
  return {
    type: ADD_USERS,
    userList,
  };
}

export function addUsersInList() {
  return function (dispatch) {
    // const url = new URL("../mock.json", import.meta.url).pathname;
    const url1 = "https://api.github.com/users?since=135";
    fetch(url1)
      .then((res) => res.json())
      .then((res) => {
        // console.log("res=", res);
        dispatch(addUsers(res));
      });
  };
}

export function fetchSelectedUserDetails(user_url) {
  return function (dispatch) {
    fetch(user_url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("user_url=", res);
        dispatch(updateUserDetails(res));
      });
  };
}

function updateUserDetails(user_details = {}) {
  return {
    type: UPDATE_USER_DETAILS,
    user_details,
  };
}

export function fetchSelectedUserFollowers(followers_url) {
  return function (dispatch) {
    fetch(followers_url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("followers_url=", res);
        dispatch(updateFollowerDetails(res));
      });
  };
}
function updateFollowerDetails(followers) {
  return {
    type: UPDATE_FOLLOWERS_DETAILS,
    followers,
  };
}

export function showPopup(show = false, current_user = {}) {
  return {
    type: SHOW_POPUP,
    show,
    current_user,
  };
}

export function hidePopup(show = true) {
  return {
    type: HIDE_POPUP,
    show,
  };
}
