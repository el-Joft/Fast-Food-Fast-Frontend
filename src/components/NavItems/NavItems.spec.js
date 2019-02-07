import React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from './NavItems';


describe('shallow testing', () => {
  let props;
  let wrapper;
  let mockData;
  beforeEach(() => {
    mockData = {
      auth: {
        isAuthenticated: true,
        loading: null,
        user: { id: 1, iat: 1549439277, exp: 1549525677 },
      },
      errors: {
        isAuthenticated: false,
        loading: null,
        email: '',
        password: '',
        message: '',
      },
      loader: {
        loading: false,
      },
    };
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

  // it('should test the onSubmit function', () => {
  //   const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  //   wrapper = shallow(<NavItem {...props} />);
  //   const loginForm = wrapper.find('Link');
  //   loginForm.simulate('click', fakeEvent);
  //   const logoutUser = jest.fn(mockData);
  //   const promise = new Promise((resolve) => {
  //     resolve(wrapper.instance().onClick);
  //   });
  //   promise.then(() => expect(logoutUser).toHaveBeenCalledTimes(1));
  // });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NavItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
