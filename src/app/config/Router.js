import React from 'react';

import ReactRouter, {
  Route,
  IndexRoute
} from 'react-router';

import App from '../handlers/App';
import Home from '../handlers/Home';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);
