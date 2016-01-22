
import React from 'react';
import {render} from 'react-dom';

import './styles/bootstrap.min.css';
import './styles/styles.scss';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { App, FooPage, BarPage, NotFoundPage, LoginPage, LogoutPage } from './containers';
import auth from "./businessLogic/auth.js";

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

const history = createHistory();
render(
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginPage} />
        <Route path="foo" component={FooPage}/>
        <Route path="bar" component={BarPage} onEnter={requireAuth}/>
        <Route path="logout" component={LogoutPage} />
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  , document.getElementById('app')
);
