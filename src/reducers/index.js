import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {default as ghUsers} from './ghUsersReducer';
import {default as ghSingleUser} from './ghSingleUserReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  ghUsers,
  ghSingleUser
});

export default rootReducer;