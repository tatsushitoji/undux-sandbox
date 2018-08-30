import * as React from 'react';
import { mount } from 'enzyme';

import { Counter } from '../Counter';

const text = 'Counter';

it('renders the heading', () => {
  const result = mount(<Counter text={text} />).find('.counter');
  console.log(result.text());
  //   expect(result).toBeTruthy();
});
