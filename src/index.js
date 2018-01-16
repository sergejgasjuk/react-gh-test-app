import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore, history} from './configureStore';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Root from './components/Root';

const $mountElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Root store={store}
        history={history} />,
  $mountElement
);

