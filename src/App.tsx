/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Routes from 'routes/Routes';
import {store} from 'store/store';

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
