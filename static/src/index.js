import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { instance } from 'utils/request';
import configureStore from 'store';
import App from 'App';

const store = configureStore();

if (process.env.NODE_ENV === 'development') {
  instance('/csrf_token');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
