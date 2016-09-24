/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './AssetManagement';

let el;

el = window.document.getElementById('app');

console.log(el);

ReactDOM.render(React.createElement(App), el);
