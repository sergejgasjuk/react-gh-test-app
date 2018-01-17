import axios from 'axios';

import {
  SEARCH_USERS,
  RESET_SEARCH_USERS,
  FETCH_USER,
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

export function resetUser() {
  return {
    type: RESET_USER
  }
}