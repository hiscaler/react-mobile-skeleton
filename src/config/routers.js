import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from '../widgets/NotFound.js';
import App from "../App";
import NewsIndex from "../components/news/NewsIndex";
import NewsView from "../components/news/NewsView";
import Authentication from "../components/Authentication";
import Dashboard from "../components/my/Dashboard";
import Error from "../components/Error";
import Login from "../components/Login";
import AlbumsIndex from "../components/albums/AlbumsIndex";
import AlbumsView from "../components/albums/AlbumsView";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/albums" exact component={AlbumsIndex}/>
    <Route path="/albums/:id" exact component={AlbumsView}/>
    <Route path="/news" exact component={NewsIndex}/>
    <Route path="/news/:id" component={NewsView}/>
    <Route path="/my" component={Authentication(Dashboard)}/>
    <Route path="/error" component={Error}/>
    <Route path="/passport/login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Switch>
)

export default Routes;