import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { history } from './config/config';
import ReduxThunk from 'redux-thunk'
const store = createStore(
  rootReducer, applyMiddleware(ReduxThunk)
)

document.title = 'IOT Dashboard'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Router history={history}>
          <Switch >
            <Route exact path="/login" component={LoginPage} />
            <Route path="/">
              <Layout/>
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </React.StrictMode>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
