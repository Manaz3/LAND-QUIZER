import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { RootState, store } from '../../types/redux/store';
import './Nav.css'

function Nav(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = (): void => {
    fetch('http://localhost:3001/api/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'user/logout' }));
      navigate('/')
  };

  
  return (
    <div>
      <nav>
        <div className="nav-wrapper indigo lighten-1">
          <Link to="/" className="brand-logo name">
            Люляшки
          </Link>
          <ul className="right hide-on-med-and-down">
            {user ? (<><li>
                <span>Привет, {user!.name}!</span>
              </li>
              <li>
                <Link to="#" onClick={logOut}>Выход</Link>
              </li></>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Регистрация</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Вход</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
