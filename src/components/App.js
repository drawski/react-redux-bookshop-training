import React, { Component } from 'react';
import createStore from '../redux/configureStore'

import { fetchFeaturedBooks } from '../redux/modules/featured'

import './App.css';

const store = createStore()

store.dispatch(fetchFeaturedBooks()) // for testing purposes

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
