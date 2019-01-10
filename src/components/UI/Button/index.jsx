import React, { Component } from 'react';

class Index extends Component {
  state = {
    on: false,
  }

  render() {
    const { on } = this.state;
    return (
      <div>
        <p className='button-state'>{ on ? 'Yes!' : 'No!'}</p>
        <button type='submit' onClick={() => this.setState({ on: true })} value="Click" />
      </div>
    );
  }
}
export default Index;
