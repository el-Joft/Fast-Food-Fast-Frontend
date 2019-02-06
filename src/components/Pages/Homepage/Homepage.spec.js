/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Homepage } from './Homepage';
import { Card } from '../../UI/Card/Card';

describe('rendering', () => {
  let wrapper;
  it('should render the component', () => {
    wrapper = shallow(<Homepage />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<Homepage />);
    expect(wrapper.find(Card)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<Homepage />);
    expect(wrapper).toMatchSnapshot();
  });
});
