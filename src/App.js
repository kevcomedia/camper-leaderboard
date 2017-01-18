import React, { Component } from 'react';
import CamperTable from './CamperTable';
import { getJSON } from 'jquery';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      camperList: []
    };
  }

  componentDidMount() {
    getJSON('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .done(json => this.setState({camperList: json}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>freeCodeCamp Camper Leaderboard</h1>
        </header>

        <CamperTable camperList={this.state.camperList} />
      </div>
    );
  }
}

export default App;
