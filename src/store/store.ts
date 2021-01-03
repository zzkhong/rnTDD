import {createStore, Store} from 'redux';
import reducers from './reducer';

export const store: Store = createStore(reducers);
