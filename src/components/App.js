import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/user/:login' component={UserPage} />
      {/*<Route path="*" component={NoMatch} />*/}
    </Switch>
  );
};

export default App;