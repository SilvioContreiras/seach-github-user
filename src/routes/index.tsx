import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Search from '../pages/Search';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );

export default Routes;
