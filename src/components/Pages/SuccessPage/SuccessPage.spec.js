/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { SuccessPage } from './SuccessPage';

describe('rendering', () => {
  let wrapper;
  it('should render the component', () => {
    wrapper = shallow(<SuccessPage />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<SuccessPage />);
    const section = wrapper.find('section');
    expect(section.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<SuccessPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
