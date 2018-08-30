import * as React from 'react';
import { mount } from 'enzyme';

import { Counter } from '../Counter';

<<<<<<< HEAD
const text = 'Counter';

it('renders the heading', () => {
  const result = mount(<Counter text={text} />).find('.counter');
=======
it('renders the heading', () => {
  const result = mount(<Counter />).find('.counter');
>>>>>>> WIP
  console.log(result.text());
  //   expect(result).toBeTruthy();
});
