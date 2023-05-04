import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Nav(): JSX.Element {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/register">Регистрация</NavLink>
            </li>
            <li>
              <NavLink to="/auth">Вход</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
