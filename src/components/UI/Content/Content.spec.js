// testing a component.
import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

describe('testing the Link in the content', () => {
  it('should accepts the address props', () => {
    const wrapper = shallow(<Content address='www.google.com' />);
    // this is testing the props a particular component will be recieving
    // here we are checking if the props is equal the address and the address is www.google.com
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });

  // check if the a tag is returning the right href
  // it('a tag node should render the correct href', () => {
  //   const wrapper = shallow(<Content address='www.google.com' />);
  //   expect(wrapper.props().href.toBe('www.google.com'));
  // });

  // to test if the return statement is showing when it is set to be false
  it('should not return any thing when the props.hide is false', () => {
    const wrapper = shallow(<Content hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    // when the props.hide is being changed to true, then the context should be found
    // set props helps new props to be set
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });
});
