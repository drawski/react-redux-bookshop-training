import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import FeaturedList from './FeaturedList'
import Category from './Category'
import CategoryList from './CategoryList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <FeaturedList/>
          <hr/>
          <Category/>
          <Route path="/category/:category" component={CategoryList}/>
        </div>
      </Router>
    );
  }
}

export default App;
