import * as React from 'react';
import { render } from 'react-dom';

import { CounterContainer } from './container/counter';

const renderApp = () =>
  render(
    <CounterContainer />,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
