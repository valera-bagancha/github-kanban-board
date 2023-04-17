import { Provider } from 'react-redux';
import { MainPage } from './page/MainPage';

import './styles/main.scss'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
