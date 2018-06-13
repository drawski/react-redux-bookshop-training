import React, { Component } from 'react';
import createStore from '../redux/configureStore'

import './App.css';

const store = createStore()

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
