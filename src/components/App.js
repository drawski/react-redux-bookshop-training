import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import FeaturedList from '../screens/FeaturedList'
import Category from './Category'
import CategoryList from '../screens/CategoryList'
import Search from '../screens/Search'

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
          <Route path="/search" component={Search}/>
        </div>
      </Router>
    );
  }
}

export default App;
