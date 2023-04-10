/* eslint-disable no-lone-blocks */
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => (
  <>
    <div className="container">
      <div className="buttons are-medium">
        <NavLink to="/" className="button is-info is-outlined">
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/top-rated-movies"
          className="button is-info is-outlined"
          end
        >
          <span>Top-Rated Movies</span>
        </NavLink>
        <NavLink to="/top-rated-tv" className="button is-info is-outlined" end>
          <span>Top-Rated TV shows</span>
        </NavLink>
        <NavLink to="/about" className="button is-info is-outlined">
          About
        </NavLink>
        <NavLink to="/flex" className="button is-info is-outlined">
          Flex
        </NavLink>
      </div>
    </div>
  </>
);

export default NavBar;

{
  /* <header>
<nav className="navigation">
  <NavLink to="/" className="link">
    <span>Home</span>
  </NavLink>
  <NavLink to="/top-rated-movies" className="link" end>
    <span>Top-Rated Movies</span>
  </NavLink>
  <NavLink to="/about" className="link">
    <span>About </span>
  </NavLink>
</nav>
</header> */
}
