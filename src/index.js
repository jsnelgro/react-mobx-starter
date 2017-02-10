import React from 'react';
import ReactDOM from 'react-dom';
import App from 'view/App';
import store from 'state/store';
import './index.css';

window.store = store

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
