import React from 'react';
import { shallow } from 'enzyme';
import Frame from './Frame';
import Header from '../../components/UI/Header/header';
import { Footer } from '../../components/UI/Footer/Footer';

describe('shallow testing', () => {
  let wrapper;
  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Frame />);
    expect(wrapper.length).toEqual(1);
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Frame />);
    const li = wrapper.find('div');
    expect(li.length).toEqual(1);
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<Frame />);
    expect(wrapper.find(Header)).toEqual({});
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<Frame />);
    expect(wrapper.find(Footer)).toEqual({});
  });

  it('should test the component if it renders anything', () => {
    wrapper = shallow(<Frame />);
    expect(wrapper).toMatchSnapshot();
  });
});
