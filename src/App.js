import React, {Component} from 'react';
import Header from "./widgets/Header";
import Tabbar from "./widgets/Tabbar";

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="page-hd">
          <Header></Header>
        </div>
        <div id="page-bd">
          Homepage
        </div>
        <div id="page-ft">
          <Tabbar/>
        </div>
      </div>
    );
  }
}

export default App;
