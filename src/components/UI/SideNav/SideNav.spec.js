import React from 'react';
import { shallow } from 'enzyme';
import SideNav from 'react-simple-sidenav';
import { SideNavigation } from './sideNav';

describe.only('shallow testing', () => {
  let wrapper;
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<SideNavigation />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<SideNavigation />);
    const li = wrapper.find(SideNav);
    expect(li.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<SideNavigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
