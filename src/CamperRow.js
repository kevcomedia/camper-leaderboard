import React, { Component } from 'react';

import './CamperRow.css';

class CamperRow extends Component {
  render() {
    const { username, img, recent, alltime } = this.props.camper;

    return (
      <tr className='CamperRow'>
        <td className='CamperRow-rank'>{this.props.rank}</td>
        <td className='CamperRow-camper'>
          <img src={img} alt={username} />
          {username}
        </td>
        <td className='CamperRow-points'>{recent}</td>
        <td className='CamperRow-points'>{alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
