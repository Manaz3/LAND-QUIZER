import { Provider } from 'react-redux';
import { store } from '../../types/redux/store';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MainPage from '../MainPage/MainPage';
import './App.css'




function App(): JSX.Element {



  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="register" element={<RegisterPage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="game" element={<MainPage />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
