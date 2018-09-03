import { createConnectedStore, withReduxDevtools, Store } from 'undux';
import { ICounterState, initialCounterState } from './modules/counter';

export default createConnectedStore<ICounterState>({
  ...initialCounterState,
});

export interface IStore {
  store: Store<ICounterState>;
}
