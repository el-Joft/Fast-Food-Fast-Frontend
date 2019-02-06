/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { AdminOrderPage } from './AdminOrderPage';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
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
