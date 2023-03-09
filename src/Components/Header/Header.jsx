import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="justify-content-center d-flex">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              about
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Header;
