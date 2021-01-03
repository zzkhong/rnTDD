import React from 'react';
import {act, create} from 'react-test-renderer';
import HomeScreen from './HomeScreen';

// necessary imports for redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'store/reducer';

// use fake timers to run async task call
// alternatively, we can create a file with jest.useFakeTimers()
// and modify the configuration in package.json OR jest.config.js
// by just adding "setupFiles": [ "<rootDir>/path_to_your_setup_file" ]
jest.useFakeTimers();

const store = createStore(reducer);
const navigation: any = {
  navigate: jest.fn(), // mock navigate function
};

const tree = create(
  <Provider store={store}>
    <HomeScreen navigation={navigation} />
  </Provider>,
);

test('#1 HomeScreen - Snapshot', () => {
  expect(tree).toMatchSnapshot();
});

jest.runAllTimers();

test('#2 useEffect call', () => {
  const text = tree.root.findByProps({testID: 'homeScreen_text'}).props;

  expect(text.children).toEqual('useEffect triggered');
  expect(text.children).not.toEqual('');
});

test('#3 Redux HomeState - setTitle', () => {
  expect(store.getState().home.title).toEqual('RNTDD');
});

test('#4 React Navigation - Navigate to Details', () => {
  const detailButton = tree.root.findByProps({
    testID: 'homeScreen_detailButton',
  }).props;
  act(() => detailButton.onPress());

  expect(navigation.navigate).toBeCalledWith('Details');
});
