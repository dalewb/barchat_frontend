import React, { Component } from 'react';
import './App.css';
import Home from './containers/home'
import UserContainer from './containers/userContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <UserContainer />
      </div>
    );
  }
}

export default App;
