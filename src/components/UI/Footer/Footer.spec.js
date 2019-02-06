/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('rendering', () => {
  let wrapper;
  it('should render the component', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<Footer />);
    const form = wrapper.find('form');
    expect(form.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
