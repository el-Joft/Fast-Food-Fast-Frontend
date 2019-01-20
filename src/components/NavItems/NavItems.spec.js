import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItems';


describe('shallow testing', () => {
  it.only('should test the component if it renders anything', () => {
    const wrapper = shallow(<NavItem />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the ul tags to have the li children', () => {
    const wrapper = shallow(<NavItem />);
    const ul = wrapper.find('ul');
    expect(ul.children().length).toEqual(5);
  });

  it.skip('should test the value of a particular div or element', () => {
    const wrapper = shallow(<NavItem />);
    // we can find using the element, id, class syntax etc.
    const h1 = wrapper.find('h1');
    expect(h1.text()).toEqual('Welcome to React');
  });
});
