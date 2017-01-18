import React, { Component } from 'react';
import CamperTable from './CamperTable';
import { getJSON } from 'jquery';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.baseUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/';

    this.state = {
      camperList: []
    };
  }

  populateTable(route) {
    getJSON(`${this.baseUrl}${route}`)
      .done(json => this.setState({camperList: json}));
  }

  componentDidMount() {
    this.populateTable('recent');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>freeCodeCamp Camper Leaderboard</h1>
        </header>

        <CamperTable
          camperList={this.state.camperList}
          populateTable={this.populateTable.bind(this)} />
      </div>
    );
  }
}

export default App;
