import React, { Component } from 'react';

import './App.css';
import FeaturedList from './FeaturedList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <FeaturedList/>
        </header>
      </div>
    );
  }
}

export default App;
