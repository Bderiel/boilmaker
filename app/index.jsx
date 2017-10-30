import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

render(
  <Provider store={store}>
    <h1>Hell World</h1>
  </Provider>,
  document.getElementById('app'),
);

