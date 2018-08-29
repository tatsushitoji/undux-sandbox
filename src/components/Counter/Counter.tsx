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

type OuterProps = IProps & IStore & IHandlers;

type AddedProps = IProps & IHandlers & ICounterState;

// connector & enhancer
const CounterProvider = compose<IProps, {}>(
  withStore,
  withHandlers<IStore, IHandlers>({
    increment: ({ store }) => () => store.set('count')(store.get('count') + 1),
    decrement: ({ store }) => () => store.set('count')(store.get('count') - 1),
  }),
  mapProps<IProps, OuterProps>(({ text, store, increment, decrement }) => ({
    text,
    increment,
    decrement,
    count: store.get('count'),
  })),
);

const CounterComponent: React.SFC<AddedProps> = ({
  text,
  count,
  increment,
  decrement,
}) => (
  <div>
    <div>
      {text}
      {count}
    </div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </div>
);

export const Counter = CounterProvider(CounterComponent);
