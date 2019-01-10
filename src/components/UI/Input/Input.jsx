import React, { Component } from 'react';

class Input extends Component {
  state = {
    value: '',
    mainColor: 'blue',
  }

  render() {
    const { value, mainColor } = this.state;
    return (
      <div>
        <h2 className={mainColor}>{value}</h2>
        <input type='text' onChange={e => this.setState({ value: e.target.value })} />
      </div>
    );
  }
}
export default Input;
