import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores/store';
import App from './containers/app_container';

// Render React Comoponents
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app-container')
);
