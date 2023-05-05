
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/redux/store";
import Card from "../Card/Card";
import { Flash } from "../../types/game/Flash";


import React from 'react';

import './MainPage.css'
function MainPage(): JSX.Element {
  const { themes } = useSelector((store: RootState) => store.flash);

  const dispatch = useDispatch();

  fetch("http://localhost:3001/game")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "flash/initialFlash",
        payload: data,
      });
    });

  return (
    <div className="container">
      {themes.map((theme) =>
        theme.Flashes.map((flashes) => <Card flashes={flashes} />)
      )}
    </div>
  );
}

export default MainPage;
