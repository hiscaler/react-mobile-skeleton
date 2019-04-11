import React, {Component} from 'react';
import FooterTabBar from "./components/FooterTabBar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      [
        <Header></Header>,
        <FooterTabBar/>
      ]
    );
  }
}

export default App;
