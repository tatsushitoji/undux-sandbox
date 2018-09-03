import * as React from 'react';
import { Counter } from '../../components/counter';
import store from '../../store';

export const CounterContainer: React.SFC = () => (
  <store.Container>
    <Counter text="Counter" />
  </store.Container>
);
