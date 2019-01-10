import React, { Component } from 'react';
import Header from '../../components/UI/Header/header';
import Footer from '../../components/UI/Footer/Footer';

class Frame extends Component {
  state = {}

  render() {
    return (
      <div>
        <Header />
        Content
        <Footer />
      </div>
    );
  }
}
export default Frame;
