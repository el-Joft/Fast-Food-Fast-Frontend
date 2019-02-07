/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { SignupPage } from './SignupPage';

describe('rendering', () => {
  let wrapper;
  let props;
  let nextProps;
  let mockedSignUpState;
  beforeEach(() => {
    mockedSignUpState = {
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


  it('should test for onchange', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => { },
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('test@test.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should render the component', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => { },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('test@test.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should render the Button component', () => {
    wrapper = shallow(<SignupPage {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should test the onSubmit function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<SignupPage {...props} />);
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', fakeEvent);
    const loginUser = jest.fn(mockedSignUpState);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(loginUser).toHaveBeenCalledTimes(1));
  });
});
