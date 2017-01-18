import React, { Component } from 'react';
import CamperRow from './CamperRow';
import ClickableHeader from './ClickableHeader';

class CamperTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Rank</th>
            <th scope='col'>Camper</th>
            <th scope='col'>
              <ClickableHeader text={'Points in last 30 days'} route={'recent'} populateTable={this.props.populateTable} />
            </th>
            <th scope='col'>
              <ClickableHeader text={'All time points'} route={'alltime'} populateTable={this.props.populateTable} />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.camperList.map((camper, i) => <CamperRow camper={camper} rank={i + 1} key={i} />)}
        </tbody>
      </table>
    );
  }
}

export default CamperTable;
