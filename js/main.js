import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

import Home from './containers/Home.react'
import Details from './containers/Details.react'
import configureStore from './store/configureStore'
import * as productActions from './actions/productActions'
import "../css/main.sass"

const store = configureStore();

store.dispatch(productActions.fetchProducts());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
