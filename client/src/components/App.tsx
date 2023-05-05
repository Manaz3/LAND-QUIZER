import { Provider } from 'react-redux';
import { store } from '../types/redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
  <Provider value={store}>

  </Provider>);
}

export default App;
