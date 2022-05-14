import React, { Component } from 'react';
import './App.css';
import DataFetcherExample from './components/DataFetcherExample';
import client from './utils/client';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetcherExample client={client} />
      </div>
    );
  }
}

export default App;
