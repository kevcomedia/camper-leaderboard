import React, { Component } from 'react';

import './ClickableHeader.css';

class ClickableHeader extends Component {
  handleClick() {
    const { populateTable, route } = this.props;
    populateTable(route);
  }

  render() {
    return (
      <button
        className='ClickableHeader'
        onClick={this.handleClick.bind(this)}>
          {this.props.text}
      </button>
    );
  }
}

export default ClickableHeader;
