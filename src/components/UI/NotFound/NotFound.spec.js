import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

describe('shallow testing', () => {
  let wrapper;
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NotFound />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NotFound />);
    const li = wrapper.find('div');
    expect(li.length).toEqual(1);
  });


  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NotFound />);
    const li = wrapper.find('Link');
    expect(li.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NotFound />);
    const li = wrapper.find('h3');
    expect(li.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
