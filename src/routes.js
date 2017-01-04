import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/containers/App';
import About from './components/presentational/About';
import HomePage from './components/presentational/HomePage';

export default (
  <Route path='/' component={App} >
    <IndexRedirect to='/home' />
    <Route path='/home' component={HomePage} />
    <Route path='/about' component={About} />
  </Route>
);
