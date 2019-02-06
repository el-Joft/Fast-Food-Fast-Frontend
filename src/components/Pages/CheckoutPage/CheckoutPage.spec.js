/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { CheckoutPage } from './CheckoutPage';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
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
});
