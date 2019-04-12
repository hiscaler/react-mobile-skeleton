import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewsList from "./components/homepage/NewsList";
import NewsView from "./components/NewsView";
import Error from "./components/Error";
import NotFound from "./widgets/NotFound";

ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/news" exact component={NewsList}/>
      <Route path="/news/:id" component={NewsView}/>
      <Route path="/error" component={Error}/>
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
