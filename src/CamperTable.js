import React, { Component } from 'react';
import { getJSON } from 'jquery';

import './CamperTable.css';

import CamperRow from './CamperRow';
import ClickableHeader from './ClickableHeader';

class CamperTable extends Component {
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
      <table className='CamperTable'>
        <thead>
          <tr>
            <th className='CamperTable-rankHeader' scope='col'>Rank</th>
            <th className='CamperTable-camperHeader' scope='col'>Camper</th>
            <th scope='col'>
              <ClickableHeader text={'Points in last 30 days'} route={'recent'} populateTable={this.populateTable.bind(this)} />
            </th>
            <th scope='col'>
              <ClickableHeader text={'All time points'} route={'alltime'} populateTable={this.populateTable.bind(this)} />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.camperList.map((camper, i) => <CamperRow camper={camper} rank={i + 1} key={i} />)}
        </tbody>
      </table>
    );
  }
}

export default CamperTable;
