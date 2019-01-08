import React, { Component } from 'react'
import Header from '../../components/UI/Header/header';
import Footer from '../../components/UI/Footer/Footer';

export default class Frame extends Component {
  render() {
    return (
      <div>
        <Header />
        Content
        <Footer />
      </div>
    )
  }
}

