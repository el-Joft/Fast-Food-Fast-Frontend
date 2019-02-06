/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { SignupPage } from './SignupPage';

describe('rendering', () => {
  let wrapper;
  let props;
  let nextProps;
  beforeEach(() => {
    props = {
      registerUser: jest.fn(),
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
      registerUser: jest.fn(),
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
    const spy = jest.spyOn(SignupPage.prototype, 'componentDidMount');
    wrapper = shallow(<SignupPage {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('invokes `componentWillRecieveProps` when mounted', () => {
    const spy = jest.spyOn(SignupPage.prototype, 'componentWillReceiveProps');
    wrapper = shallow(<SignupPage {...props} />);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Button component', () => {
    wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper.length).toBe(1);
  });
});
