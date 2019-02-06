import React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from '../../NavItems/NavItems';
import { Navbar } from './Navbar';

describe('shallow testing', () => {
  let wrapper;
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Navbar />);
    const li = wrapper.find('div');
    expect(li.length).toEqual(1);
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavItem)).toEqual({});
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
