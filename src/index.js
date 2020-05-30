import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Index} />
          <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
