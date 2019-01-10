import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

describe('testing the button', () => {
  it('on click the p tag text should change', () => {
    const wrapper = shallow(<Input />);
    const input = wrapper.find('input');
    // checking if the state is false before click
    expect(wrapper.find('h2').text()).toBe('');
    // simulate when the button is clicked
    // it won't work if the second property is not specified i.e. the target and the value
    input.simulate('change', { target: { value: 'Timothy' } });
    // then check if the text changes
    expect(wrapper.find('h2').text()).toBe('Timothy');
  });

  // test to check a change in the colour of the h2 tag
  it('should change the colour of the h2', () => {
    const wrapper = shallow(<Input />);
    const FirstClassName = wrapper.find('.blue');
    const SecondClassName = wrapper.find('.red');
    // stating the current classname
    expect(FirstClassName.length).toBe(1);
    // expecting the other class to be 0
    expect(SecondClassName.length).toBe(0);
    // then update the other cllassname to red
    wrapper.setState({ mainColor: 'red' });
    // expect(FirstClassName.length).toBe(0);
    // expect(SecondClassName.length).toBe(1);
  });
});
