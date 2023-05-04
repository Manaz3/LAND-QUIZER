import { Provider } from 'react-redux';
import { store } from '../types/redux/store';

function App(): JSX.Element {
  return <Provider value={store}></Provider>;
}

export default App;
