import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import Store from './state/Store';
import './index.css';

const store = new Store()
window.store = store

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
