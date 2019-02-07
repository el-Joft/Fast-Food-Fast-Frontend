/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { CheckoutPage } from './CheckoutPage';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      cart: [{}],
      changeQuantity: jest.fn(),
      checkoutOrder: jest.fn(),
      history: '',
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
    const spy = jest.spyOn(CheckoutPage.prototype, 'componentDidMount');
    wrapper = shallow(<CheckoutPage {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<CheckoutPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Button component', () => {
    wrapper = shallow(<CheckoutPage {...props} />);
    expect(wrapper.length).toBe(1);
  });


  // it('should test for onchange', () => {
  //   const event = {
  //     target: { name: 'quantity', value: '1' },
  //     preventDefault: () => { },
  //   };

  //   wrapper.instance().changeInput(event);
  //   expect(wrapper.state().quantity).toEqual('1');
  //   expect(wrapper.instance().state.quantity).toEqual(event.target.value);
  // });
  // it('should render the Button component', () => {
  //   wrapper = shallow(<LoginPage {...props} />);
  //   expect(wrapper.length).toBe(1);
  // });

  // it('should test mapStateToProps', () => {
  //   const state = mapStateToProps(mockedSignInState);
  //   expect(state).toBeTruthy();
  // });

  it('should test the onSubmit function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapper = shallow(<CheckoutPage {...props} />);
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', fakeEvent);
    const loginUser = jest.fn(props);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(loginUser).toHaveBeenCalledTimes(1));
  });
});
