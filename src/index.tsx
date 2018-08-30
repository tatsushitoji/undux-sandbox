import * as React from 'react';
import { render } from 'react-dom';

import { Counter } from './components/Counter';

const renderApp = () =>
  render(
    <Counter text="Counter" />,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
