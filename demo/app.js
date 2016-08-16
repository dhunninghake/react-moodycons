import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('./fonts/calibre.css');
require('./styles/style.css');

render(
  <App />,
  document.getElementById('app')
);
