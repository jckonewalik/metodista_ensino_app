import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { store } from './redux/store';
import MainPage from './pages/main/main.component';


const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
