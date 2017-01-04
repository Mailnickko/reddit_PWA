// From dependencies
import { render } from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

// From App
import './styles/styles.scss';
import rootReducer from './reducers';
import routes from './routes';

const routingMiddleware = routerMiddleware(browserHistory);
const store = createStore(rootReducer, applyMiddleware(thunk, routingMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>
);

render(router, document.querySelector('#app'));
