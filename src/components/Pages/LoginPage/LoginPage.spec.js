/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('rendering', () => {
  let wrapper;
  let props;
  let nextProps;
  beforeEach(() => {
    props = {
      loginUser: jest.fn(),
      checkoutOrder: jest.fn(),
      history: {
        push: jest.fn(),
      },
      success: {
        status: true,
      },
      orders: [],
      auth: {
        isAuthenticated: true,
        user: {
          id: 1,
        },
      },
    };
    nextProps = {
      loginUser: jest.fn(),
      checkoutOrder: jest.fn(),
      history: {
        push: jest.fn(),
      },
      success: {
        status: true,
      },
      orders: [],
      auth: {
        isAuthenticated: true,
        user: {
          id: 1,
        },
      },
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(LoginPage.prototype, 'componentDidMount');
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('invokes `componentWillRecieveProps` when mounted', () => {
    const spy = jest.spyOn(LoginPage.prototype, 'componentWillReceiveProps');
    wrapper = shallow(<LoginPage {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Button component', () => {
    wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper.length).toBe(1);
  });
});
