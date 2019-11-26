import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { store } from './redux/store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#F55E5E" />
    <Routes />
  </Provider>
);

export default App;
