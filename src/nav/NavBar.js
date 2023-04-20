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
              <Link to="/all/trending" className="navbar-item">
                Trending
              </Link>
              <Link to="/all/movies" className="navbar-item">
                Movies
              </Link>
              <Link to="/all/tv-shows" className="navbar-item">
                TV Shows
              </Link>
            </div>
            <Link to="/all/search" className="navbar-item">
              Search
            </Link>
          </div>
          <div className="navbar-end">
            {isSignedIn && (
              <div className="navbar-item">
                <Link to="/all/favourites" className="navbar-item">
                  Favourites
                </Link>
                <div
                  style={{
                    display: "inline-block",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "25px",
                    marginRight: "10px",
                  }}
                >
                  {favouritesList ? favouritesList.length : 0}
                </div>
              </div>
            )}
            <div className="navbar-item">
              {!isSignedIn ? (
                <Link to="/all/sign-in">Sign In</Link>
              ) : (
                <div className="columns is-vcentered is-gapless">
                  <div className="column">
                    <div className="tag is-small is-warning">
                      Hello, {authUser}
                    </div>
                  </div>
                  <div className="column">
                    <button className="button is-ghost" onClick={handleSignout}>
                      Sign out
                    </button>
                  </div>
                </div>
                // </Link>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
