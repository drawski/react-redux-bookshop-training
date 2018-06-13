import React, { Component } from 'react';

import './App.css';
import FeaturedList from './FeaturedList'
import Category from './Category'
import CategoryList from './CategoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FeaturedList/>
        <hr/>
        <Category/>
        <CategoryList/>
      </div>
    );
  }
}

export default App;
