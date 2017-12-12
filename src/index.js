import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// redux related
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
// application
import './index.css';
import App from './App';

// create store
let store = createStore(todoApp);

// use provider to allow globally access to store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
