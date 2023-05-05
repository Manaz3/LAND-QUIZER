
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Navbar = ():JSX.Element => {



    return (
  <nav>
        <div className="nav-wrapper purple lighten-1">
          <Link to="/" className="brand-logo">React is cool!</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/list">Students List</NavLink></li>
          </ul>
        </div>
      </nav>
      )
}