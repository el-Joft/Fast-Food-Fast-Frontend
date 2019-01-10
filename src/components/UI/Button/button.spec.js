import { shallow } from 'enzyme';
import React from 'react';
import Index from './index';

describe('testing the button', () => {
  it('on click the p tag text should change', () => {
    const wrapper = shallow(<Index />);
    const button = wrapper.find('button');
    // checking if the state is false before click
    expect(wrapper.find('.button-state').text()).toBe('No!');
    // simulate when the button is clicked
    button.simulate('click');
    // then check if the text changes
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });
});
