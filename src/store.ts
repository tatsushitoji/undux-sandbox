import { connect, createStore, withReduxDevtools } from 'undux';
import { initialCounterState } from './modules/counter';

export const store = withReduxDevtools(createStore({ ...initialCounterState }));

export const withStore = connect(store);

export interface IStore {
  store: typeof store;
}
