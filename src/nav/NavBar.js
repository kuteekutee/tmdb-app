/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useFavourites } from "../contexts/FavouritesContext";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  let { favouritesList } = useFavourites();
  const { isSignedIn, authUser, setAuthUser, setIsSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    setIsSignedIn(false);
    setAuthUser(null);
    navigate("/all/trending", { replaced: true });
  };

  return (
    <>
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: 80 }}
              className="py-2 px-2"
            />
            {process.env.REACT_APP_TITLE}
          </Link>

          <Link
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={"navbar-burger burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarToggleActive"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div
          id="navbarToggleActive"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <div className="navbar-item">
              <Link
                to="/all/trending"
                className="navbar-item"
                onClick={() => {
                  setisActive(!isActive);
                }}
              >
                Trending
              </Link>
              <Link
                to="/all/movies"
                className="navbar-item"
                onClick={() => {
                  setisActive(!isActive);
                }}
              >
                Movies
              </Link>
              <Link
                to="/all/tv-shows"
                className="navbar-item"
                onClick={() => {
                  setisActive(!isActive);
                }}
              >
                TV Shows
              </Link>
              <Link
                to="/all/search"
                className="navbar-item"
                onClick={() => {
                  setisActive(!isActive);
                }}
              >
                Search
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            {isSignedIn && (
              <div className="navbar-item">
                <Link
                  to="/all/favourites"
                  className="navbar-item is-mobile"
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                >
                  Favourites
                  <span className="tag is-primary m-2">
                    {favouritesList ? favouritesList.length : 0}
                  </span>
                </Link>
              </div>
            )}

            {!isSignedIn ? (
              <div className="navbar-item is-mobile">
                <Link
                  to="/all/sign-in"
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                >
                  Sign In
                </Link>
              </div>
            ) : (
              <div className="navbar-item is-mobile">
                <a className="button is-ghost is-small" onClick={handleSignout}>
                  Sign out
                </a>
                <div className="tag is-small is-warning m-2">
                  Hello, {authUser}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
