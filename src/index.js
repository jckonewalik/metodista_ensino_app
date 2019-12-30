import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { store, persistor } from './redux/store';
import MainPage from './pages/main/main.component';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainPage />
    </PersistGate>
  </Provider>
);

export default App;
