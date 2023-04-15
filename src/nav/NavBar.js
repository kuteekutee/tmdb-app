import React from "react";
import { NavLink } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";

export const NavBar = () => {
  const { favouritesList } = useFavourites();
  return (
    <>
      <div className="container mb-4">
        <div className="columns">
          <div className="column">
            <NavLink to="/" className="button">
              <span>Home</span>
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/top-rated-movies" className="button">
              <span>Top-Rated Movies</span>
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/top-rated-tv" className="button" end>
              <span>Top-Rated TV shows</span>
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/search" className="button">
              Search
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/favourites" className="button">
              Favourites-{favouritesList.length}
            </NavLink>
          </div>
          <div className="column">
            <NavLink to="/about" className="button">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
