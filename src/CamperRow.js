import React, { Component } from 'react';

import './CamperRow.css';

class CamperRow extends Component {
  render() {
    const { username, img, recent, alltime } = this.props.camper;

    return (
      <tr className='CamperRow'>
        <td className='CamperRow-rank'>{this.props.rank}</td>
        <td className='CamperRow-camper'>
          <a href={`https://freecodecamp.com/${username}`} target='_blank'>
            <img src={img} alt={username} />
            {username}
          </a>
        </td>
        <td className='CamperRow-points'>{recent}</td>
        <td className='CamperRow-points'>{alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
