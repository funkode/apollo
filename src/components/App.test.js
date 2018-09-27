import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('<App />', () => {

  test('<App /> renders', () => {

    const wrapper = shallow(<App message='Test Message' />);

    expect(wrapper.find('h1').text()).toBe('Test Message');

  });

});
