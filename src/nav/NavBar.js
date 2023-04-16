import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Navbar, Container } from "react-bulma-components";
import myImage from "../assets/images/myImage.jpg";
import "bulma/css/bulma.min.css";
import { useFavourites } from "../contexts/FavouritesContext";
import UsersContext from "../contexts/UsersContext";
import "./NavBar.css";

const MyNavbar = () => {
  const [isActive, setisActive] = useState(false);
  const { favouritesList } = useFavourites();
  const { currentUser, isLoggedin } = useContext(UsersContext);

  console.log("currentUser", currentUser);

  return (
    <>
      <Navbar color="primary" fixed="top" active={isActive}>
        <Container>
          <Navbar.Brand>
            <Navbar.Item renderAs="div">
              <NavLink to="/" exact>
                <img
                  src={myImage}
                  alt="Your Movie Database"
                  style={{ marginRight: 15 }}
                />
              </NavLink>
            </Navbar.Item>
            <Navbar.Burger
              onClick={() => setisActive(!isActive)}
              className={isActive ? "is-active" : ""}
            />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item renderAs="div">
                <NavLink to="/top-rated-movies" activeClassName="is-active">
                  Top Rated Movies
                </NavLink>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <NavLink to="/top-rated-tv" activeClassName="is-active">
                  Top Rated TV Shows
                </NavLink>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <NavLink to="/best-movies" activeClassName="is-active">
                  Best Movies
                </NavLink>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <NavLink to="/search" activeClassName="is-active">
                  Search Movies
                </NavLink>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <NavLink to="/favourites" activeClassName="is-active">
                  Favourite Movies{" "}
                  <div
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "20px",
                      marginRight: "10px",
                    }}
                  >
                    {favouritesList.length}
                  </div>
                </NavLink>
              </Navbar.Item>

              <Navbar.Item renderAs="div">
                <NavLink to="/about" activeClassName="is-active">
                  About
                </NavLink>
              </Navbar.Item>
              <Navbar.Item renderAs="div">
                <NavLink to="/login" activeClassName="is-active">
                  {isLoggedin ? "Logout" : "Login"}
                  {/* {isLoggedin ? `Welcome back! ${currentUser}` : "Please Login"} */}
                </NavLink>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
