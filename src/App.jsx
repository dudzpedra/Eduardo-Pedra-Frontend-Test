import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/ui/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
