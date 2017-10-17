import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { Navigation } from '../Navigation';

configure({ adapter: new Adapter() });

describe('Navigation', () => {
  it('should render initial component', () => {
    const component = shallow(
      <Navigation />
    );

    expect(component).toBeDefined();
  });
});
