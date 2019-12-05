import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { store } from './redux/store';
import Routes from './routes';
import SignInPage from './pages/sign-in/sign-in.component';

const App = () => (
  <Provider store={store}>
    {true ? <SignInPage />
      : (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#F22333" />
          <Routes />
        </>
      )}
  </Provider>
);

export default App;
