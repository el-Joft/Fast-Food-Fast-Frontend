import React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from './NavItems';


describe('shallow testing', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
      },
    };
  });
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NavItem {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NavItem {...props} />);
    const li = wrapper.find('li');
    expect(li.length).toEqual(5);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NavItem {...props} />);
    const li = wrapper.find('Link');
    expect(li.length).toEqual(5);
  });
  // it('should test a method inside the component', () => {
  //   const logoutClick = jest.fn();
  //   wrapper = shallow(<NavItem {...props} />);
  //   wrapper.find('Link').simulate('click');
  //   wrapper.instance();
  //   expect(logoutClick).toHaveBeenCalled();
  // });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NavItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
