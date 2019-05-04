import React from 'react'
import {Route, Switch} from "react-router-dom"
import NotFound from '../widgets/NotFound.js'
import App from "../App"
import NewsIndex from "../components/news/NewsIndex"
import NewsView from "../components/news/NewsView"
import Authentication from "../components/Authentication"
import Dashboard from "../components/my/Dashboard"
import Error from "../components/Error"
import Login from "../components/Login"
import AlbumsIndex from "../components/albums/AlbumsIndex"
import AlbumsView from "../components/albums/AlbumsView"
import MemberProfile from "../components/my/MemberProfile"
import NoticeView from "../components/notice/NoticeView"

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Authentication(App)}/>
    <Route path="/albums" exact component={Authentication(AlbumsIndex)}/>
    <Route path="/albums/:id" exact component={Authentication(AlbumsView)}/>
    <Route path="/notice/:id" exact component={Authentication(NoticeView)}/>
    <Route path="/news" exact component={Authentication(NewsIndex)}/>
    <Route path="/news/:id" component={Authentication(NewsView)}/>
    <Route path="/my/profile" component={Authentication(MemberProfile)}/>
    <Route path="/my" component={Authentication(Dashboard)}/>
    <Route path="/error" component={Error}/>
    <Route path="/passport/login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Switch>
)

export default Routes