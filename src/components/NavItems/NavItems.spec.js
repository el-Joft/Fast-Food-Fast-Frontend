import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItems';


describe('shallow testing', () => {
  it('should test the component if it renders anything', () => {
    const wrapper = shallow(<NavItem />);
    expect(wrapper.length).toEqual(1);
  });
});
