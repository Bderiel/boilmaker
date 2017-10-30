import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'redux';
import store from './store';

render(
  <Provider store={store}>
    <h1>Hell World</h1>
  </Provider>,
  document.getElementById('app'),
);

