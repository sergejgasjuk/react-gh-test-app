import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {default as ghUsers} from './ghUsersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  ghUsers
});

export default rootReducer;