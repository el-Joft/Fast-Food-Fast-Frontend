/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Header from '../../components/UI/Header/header';
import Footer from '../../components/UI/Footer/Footer';
import './Frame.scss';
import './responsive.scss';

class Frame extends Component {
  state = {
    showNav: false,
  }

  toggleSideNav = (action) => {
    this.setState({
      showNav: action,
    });
  }

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onShowNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default Frame;
