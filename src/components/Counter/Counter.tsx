import * as React from 'react';
import { compose, withHandlers, mapProps } from 'recompose';
import { IStore, withStore } from '../../store';
import { ICounterState } from '../../modules/counter';

interface IProps {
  text: string;
}

interface IHandlers {
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
}

type InjectedProps = IProps & IStore & IHandlers;

type EnhancedProps = IProps & IHandlers & ICounterState;

// connector & enhancer
const CounterProvider = compose<EnhancedProps, IProps>(
  withStore,
  withHandlers<IStore, IHandlers>({
    increment: ({ store }) => () => store.set('count')(store.get('count') + 1),
    decrement: ({ store }) => () => store.set('count')(store.get('count') - 1),
  }),
  mapProps<IProps, InjectedProps>(({ text, store, increment, decrement }) => ({
    text,
    increment,
    decrement,
    count: store.get('count'),
  })),
);

const CounterComponent: React.SFC<EnhancedProps> = ({
  text,
  count,
  increment,
  decrement,
}) => (
  <div>
    <div className="counter">
      {text}
      {count}
    </div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </div>
);

export const Counter = CounterProvider(CounterComponent);
