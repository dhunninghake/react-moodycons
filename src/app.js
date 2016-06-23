import React from 'react';
import { render } from 'react-dom';

import { browserHistory, Router } from 'react-router';
import Routes from './app/config/Router';

render(
  <Router history={browserHistory}>{Routes}</Router>,
  document.getElementById('app')
);
