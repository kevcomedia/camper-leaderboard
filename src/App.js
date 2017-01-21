import React, { Component } from 'react';
import CamperTable from './CamperTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>freeCodeCamp<span className='fa fa-free-code-camp' aria-hidden='true'></span> Camper Leaderboard</h1>
        </header>

        <CamperTable />
      </div>
    );
  }
}

export default App;
