/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      getAllMenus: jest.fn(),
      addCart: jest.fn(),
      history: '',
      success: {
        status: true,
      },
      menu: {
        menu: [],
      },
      auth: {
        isAuthenticated: true,
        user: {
          id: 1,
        },
      },
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(Card.prototype, 'componentDidMount');
    wrapper = shallow(<Card {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should render the component', () => {
    wrapper = shallow(<Card {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Button component', () => {
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.length).toBe(1);
  });
});
