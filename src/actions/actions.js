import {
  ADD_USERS,
  HIDE_POPUP,
  SHOW_POPUP,
  UPDATE_FOLLOWERS_DETAILS,
  UPDATE_USER_DETAILS,
  ADD_SEARCH_RESULT,
  SHOW_SPINNER,
  HIDE_SPINNER,
  ADD_USER_REPOS
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
    const url1 = "https://api.github.com/users?per_page=100";
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
      })
      .catch((error) => console.error(error));
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
      })
      .catch((error) => console.error(error));
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

export function fetchSearchResult(query){
  // const url=`https://api.github.com/search/users?q=sanjay&page=2`
  const url=`https://api.github.com/search/users?q=${query}`;
  return function (dispatch) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("followers_url=", res);
        dispatch(addSearchResult(res));
      })
      .catch((error) => console.error(error))
      .finally(()=>{
        setTimeout(()=>{
          dispatch(hideSpinner());
        },0)
      })
  };
}

export function addSearchResult(res){
  return {
    type:ADD_SEARCH_RESULT,
    search_result:res
  }
}

export function showSpinner(){
  return {
    type:SHOW_SPINNER,
    spinner:true
  }
}
export function hideSpinner(){
  return {
    type:HIDE_SPINNER,
    spinner:false
  }
}

export function fetchUserRepos(url){
  return function (dispatch) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("followers_url=", res);
        dispatch(addUserRepos(res));
      })
      .catch((error) => console.error(error));
     
  };
}

export function addUserRepos(repos){
  return {
    type:ADD_USER_REPOS,
    user_repos:repos
  }
}
