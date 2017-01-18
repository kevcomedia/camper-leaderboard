import React, { Component } from 'react';

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
          {/* Rows will go here */}
        </tbody>
      </table>
    );
  }
}

export default CamperTable;
