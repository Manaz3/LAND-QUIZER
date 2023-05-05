import { Provider } from "react-redux";
import { store } from "../../types/redux/store";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import MainPage from "../MainPage/MainPage";
import { useReducer } from "react";
import { flashReducer, initialState } from "../../types/redux/reducers/FlashReducer";

function App(): JSX.Element {
  const [state, dispatch] = useReducer(flashReducer, initialState);

  fetch("/flashes")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "flash/initialFlash",
        payload: data,
      })
    );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="auth" element={<LoginPage />} />
            <MainPage />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
