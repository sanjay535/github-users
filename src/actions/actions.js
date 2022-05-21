import { ADD_USERS, HIDE_POPUP, SHOW_POPUP } from "./actionTypes";

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
        console.log("res=", res);
        dispatch(addUsers(res));
      });
  };
}

export function showPopup(show = false) {
  return {
    type: SHOW_POPUP,
    show,
  };
}

export function hidePopup(show = true) {
  return {
    type: HIDE_POPUP,
    show,
  };
}
