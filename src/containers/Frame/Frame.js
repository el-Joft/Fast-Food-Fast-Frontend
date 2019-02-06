/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Header from '../../components/UI/Header/header';
import Footer from '../../components/UI/Footer/Footer';
import './Frame.scss';
import './responsive.scss';

class Frame extends Component {
  state = {}

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default Frame;
