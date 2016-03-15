// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';
import icon from "file!./assets/images/cc.png";
import Main from './components/Main';

const iconSize = 32;

ReactDOM.render(
  <Main />,
  document.getElementById('react-root')
);