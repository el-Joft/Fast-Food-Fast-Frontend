/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { MenuPage } from './MenuPage';
import { Card } from '../../UI/Card/Card';

describe('rendering', () => {
  let wrapper;
  it('should render the component', () => {
    wrapper = shallow(<MenuPage />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<MenuPage />);
    expect(wrapper.find(Card)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<MenuPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
