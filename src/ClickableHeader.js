import React, { Component } from 'react';

class ClickableHeader extends Component {
  handleClick() {
    const { populateTable, route } = this.props;
    populateTable(route);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.props.text}</button>
    );
  }
}

export default ClickableHeader;
