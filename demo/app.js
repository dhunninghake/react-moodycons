import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('./fonts/calibre.css');
require('./styles/readme.css');

render(
  <App />,
  document.getElementById('app')
);
