import React, { Component } from 'react';

import './App.css';
import FeaturedList from './FeaturedList'
import Category from './Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Category/>
        <FeaturedList/>
      </div>
    );
  }
}

export default App;
