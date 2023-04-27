import { Provider } from 'react-redux';
import { MainPage } from './page/MainPage';

import './styles/main.scss'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <MainPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
