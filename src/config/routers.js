import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from '../widgets/NotFound.js';
import App from "../App";
import NewsIndex from "../components/news/NewsIndex";
import NewsView from "../components/news/NewsView";
import Authentication from "../components/Authentication";
import Dashboard from "../components/my/Dashboard";
import Error from "../components/Error";
import Login from "../components/Login";

const Routes = () => (
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
)

export default Routes;