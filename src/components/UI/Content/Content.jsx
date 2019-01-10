import React, { Component } from 'react';

class Content extends Component {
  state = {}

  render() {
    const { hide } = this.props;
    return (
      hide ? null : (
        <a href="{this.props.address}">
        Click
        </a>
      ));
  }
}


export default Content;
