import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from "./config/routers";
import Header from "./widgets/Header";
import Tabbar from "./widgets/Tabbar";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div id="page">
      <div id="page-hd">
        <Header/>
      </div>
      <div id="page-bd">
        <Routes/>
      </div>
      <div id="page-ft">
        <Tabbar/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
