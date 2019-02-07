/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { AdminOrderPage } from './AdminOrderPage';

describe('rendering', () => {
  let wrapper;
  let props;
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
      getAdminOrders: jest.fn(),
      comment: '',
      success: {
        status: true,
      },
      orders: [],
      auth: {
        user: {
          id: 1,
        },
      },
    };
  });

  it('invokes `componentWillMount` when mounted', () => {
    const spy = jest.spyOn(AdminOrderPage.prototype, 'componentWillMount');
    wrapper = shallow(<AdminOrderPage {...props} />);
    wrapper.instance().componentWillMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<AdminOrderPage {...props} />);
    expect(wrapper.length).toBe(1);
  });

  // it('should test the onSubmit function', () => {
  //   const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  //   wrapper = shallow(<AdminOrderPage {...props} />);
  //   const loginForm = wrapper.find('button');
  //   loginForm.simulate('click', fakeEvent);
  //   const logoutUser = jest.fn(mockData);
  //   const promise = new Promise((resolve) => {
  //     resolve(wrapper.instance().onClick);
  //   });
  //   promise.then(() => expect(logoutUser).toHaveBeenCalledTimes(1));
  // });


  it('should render the component', () => {
    wrapper = shallow(<AdminOrderPage {...props} />);
    const td = wrapper.find('table');
    expect(td.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<AdminOrderPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
