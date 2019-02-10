import React from 'react';
import { shallow } from 'enzyme';
import SideNav from 'react-simple-sidenav';
import { SideNavItem } from './sideNavItem';

describe.only('shallow testing', () => {
  let wrapper;
  let mockData;
  beforeEach(() => {
    mockData = {
      auth: {
        isAuthenticated: true,
        loading: null,
        user: { id: 1, iat: 1549439277, exp: 1549525677 },
      },
    };
  });
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<SideNavItem {...mockData} />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<SideNavItem {...mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
