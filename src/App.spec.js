import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes/Routes';

describe('Testing the App', () => {
  it('should render the Routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.length).toBe(1);
  });
});
