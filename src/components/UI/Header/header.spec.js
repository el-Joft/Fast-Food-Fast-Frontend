import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './header';

describe('shallow testing', () => {
  it('should test the component if it renders anything', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('Navbar');
    expect(header.length).toEqual(1);
  });

  it('should test the component contains the classname header-1', () => {
    const wrapper = shallow(<Header />);
    const classname = wrapper.find('.header-1');
    expect(classname.exists()).toBe(true);
  });

  it('testing the header with snapshots', () => {
    const tree = shallow(<Header />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  // testing lifecycle methods using mount rendering
  // here test can affect each other when they are using the same dom
  // it('should matches the snapshot', () => {
  //   const tree = mount(<Header />);
  //   expect(toJson(tree)).toMatchSnapshot();
  //   tree.unmount();
  // });
});
