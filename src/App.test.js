import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('shallow testing', () => {
  it('should test the component if it renders anything', () => {
    const wrapper = shallow(<App />);
    const route = wrapper.find('BrowserRouter');
    expect(route.length).toEqual(1);
  });
});
