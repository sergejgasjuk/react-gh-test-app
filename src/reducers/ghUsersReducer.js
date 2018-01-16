import persistedState from 'constants/persistedState';
import {
  SEARCH_USERS,
  RESET_SEARCH_USERS,
} from 'constants/actionTypes';

export default function ghUsersReducer(state = persistedState.ghUsers, action) {
  switch (action.type) {
    case SEARCH_USERS:
      const newData = action.payload.data;
      const {items, total_count: count} = newData;
      
      return Object.assign({}, state, {items, count});
    case RESET_SEARCH_USERS:
      return Object.assign({}, state, persistedState.ghUsers);
    default:
      return state;
  }
}
