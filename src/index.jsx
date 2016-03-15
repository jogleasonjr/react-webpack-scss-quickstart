// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  <Router history={hashHistory} routes={routes}/>,
  document.getElementById('react-root')
);