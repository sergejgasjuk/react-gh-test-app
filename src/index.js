import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Root from './components/Root';

const $mountElement = document.getElementById('root');

ReactDOM.render(
  <Root />,
  $mountElement
);

