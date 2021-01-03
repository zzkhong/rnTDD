import {combineReducers} from 'redux';
import home from 'screen/Home/HomeReducer';

const reducers = combineReducers({
  home,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
