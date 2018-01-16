import axios from 'axios';

import {
  SEARCH_USERS,
  RESET_SEARCH_USERS
} from 'constants/actionTypes';


const ROOT_URL = 'https://api.github.com';

export function searchUsers(userName = '') {
  const url = `${ROOT_URL}/search/users?q=${userName}`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: SEARCH_USERS,
    payload: request
  }
}

export function resetSearchUsers() {
  return {
    type: RESET_SEARCH_USERS
  }
}