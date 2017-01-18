import React, { Component } from 'react';
import CamperRow from './CamperRow';

class CamperTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Rank</th>
            <th scope='col'>Camper</th>
            <th scope='col'>Points in last 30 days</th>
            <th scope='col'>All time points</th>
          </tr>
        </thead>
        <tbody>
          {this.props.camperList.map((camper, i) => <CamperRow camper={camper} rank={i + 1} />)}
        </tbody>
      </table>
    );
  }
}

export default CamperTable;
