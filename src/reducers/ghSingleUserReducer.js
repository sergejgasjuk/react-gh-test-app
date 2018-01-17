import persistedState from 'constants/persistedState';
import {
  FETCH_USER,
  FETCH_USER_REPOS,
  RESET_USER
} from 'constants/actionTypes';

export default function ghUsersReducer(state = persistedState.ghSingleUser, action) {
  switch (action.type) {
    case FETCH_USER:
      const user = action.payload.data;
      
      return Object.assign({}, state, {user});
    case FETCH_USER_REPOS:
      const newRepos = action.payload.data;
      const repos = state.repos || [];

      return Object.assign({}, state, {repos: [...newRepos] });
    case RESET_USER:
      return Object.assign({}, state, {user: null, repos: null});
    default:
      return state;
  }
}
