import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

const history = createHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, ReduxPromise, router);
const persistedState = {};

function configureStore() {
  const store = createStore(rootReducer, persistedState, composeWithDevTools(enhancer));
  const stateLogger = () => console.log(store.getState());
  
  store.subscribe(stateLogger);
  stateLogger();
  
  return store;
}

export {configureStore, history};