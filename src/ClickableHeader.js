import React, { Component } from 'react';

class ClickableHeader extends Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

export default ClickableHeader;
