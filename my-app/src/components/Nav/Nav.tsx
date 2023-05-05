import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RootState, store } from '../../types/redux/store';

function Nav(): JSX.Element {
  const user = useSelector((store: RootState) => store.userInfo)

  console.log(user);
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <ul className="right hide-on-med-and-down">
            {user ? (<><li>
                <span>Привет, {user?.name}!</span>
              </li>
              <li>
                <NavLink to="/logout">Выход</NavLink>
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
