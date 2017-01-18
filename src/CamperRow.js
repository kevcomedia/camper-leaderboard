import React, { Component } from 'react';

class CamperRow extends Component {
  render() {
    const { username, img, recent, alltime } = this.props.camper;

    return (
      <tr>
        <td>{this.props.rank}</td>
        <td>
          <img src={img} alt={username} width='50' height='50' />
          {username}
        </td>
        <td>{recent}</td>
        <td>{alltime}</td>
      </tr>
    );
  }
}

export default CamperRow;
