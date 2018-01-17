import axios from 'axios';

import {
  SEARCH_USERS,
  RESET_SEARCH_USERS,
  FETCH_USER,
  FETCH_USER_REPOS,
  RESET_USER
} from 'constants/actionTypes';


const ROOT_URL = 'https://api.github.com';

export function searchUsers(userName = '') {
  const url = `${ROOT_URL}/search/users?q=${userName}`;
  const request = axios.get(url);
  
  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: SEARCH_USERS,
        payload: res
      });
    });
  }
}

export function resetSearchUsers() {
  return {
    type: RESET_SEARCH_USERS
  }
}

export function fetchUser(name) {
  const url = `${ROOT_URL}/users/${name}`;
  const request = axios.get(url);
  
  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: FETCH_USER,
        payload: res
      });
    });
  }
}

export function fetchUserRepos(name) {
  const url = `${ROOT_URL}/users/${name}/repos`;
  const request = axios.get(url);
  
  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: FETCH_USER_REPOS,
        payload: res
      });
    });
  }
}

export function resetUser() {
  return {
    type: RESET_USER
  }
}