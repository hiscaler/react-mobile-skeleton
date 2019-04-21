import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error from "./components/Error";
import NotFound from "./widgets/NotFound";
import Login from "./components/Login";
import Dashboard from "./components/my/Dashboard";
import Authentication from "./components/Authentication";
import NewsIndex from "./components/news/NewsIndex";
import NewsView from "./components/news/NewsView";

ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/news" exact component={NewsIndex}/>
      <Route path="/news/:id" component={NewsView}/>
      <Route path="/my" component={Authentication(Dashboard)}/>
      <Route path="/error" component={Error}/>
      <Route path="/passport/login" component={Login}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
