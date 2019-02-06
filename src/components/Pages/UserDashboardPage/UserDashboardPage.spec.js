/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { UserDashboardPage } from './UserDashboardPage';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      getOrders: jest.fn,
      orders: [],
      history: {
        push: jest.fn,
      },
      auth: {
        isAuthenticated: false,
        user: {
          id: 1,
        },
      },
    };
  });

  it('invokes `componentWillMount` when mounted', () => {
    const spy = jest.spyOn(UserDashboardPage.prototype, 'componentWillMount');
    wrapper = shallow(<UserDashboardPage {...props} />);
    wrapper.instance().componentWillMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<UserDashboardPage {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<UserDashboardPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
