/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './sideNavItem';
import NavItem from '../../NavItems/NavItems';

export const SideNavigation = props => (
  <div>
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: '#42ce9f',
        maxWidth: '220px',
      }}
    >
      <SideNavItem />
    </SideNav>
  </div>
);

export default SideNavigation;
