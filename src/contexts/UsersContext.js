import React, { useState, createContext, useEffect } from "react";
import Users from "../data/users.json";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(Users);
  const [newUser, setNewUser] = useState({});
  const [currentUser, setCurrentUser] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    if (!newUser.username || !newUser.email || !newUser.password) {
      return;
    }
    const id = users.length + 1;
    const user = { ...newUser, id };
    setUsers([...users, user]);
    setNewUser({});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    if (name === "usernameLogin") {
      setUsernameLogin(value);
    } else if (name === "passwordLogin") {
      setPasswordLogin(value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddUser(event);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const checkUserCredentials = (event) => {
    event.preventDefault();
    if (!usernameLogin || !passwordLogin) {
      return;
    }
    const user = users.find((user) => user.username === usernameLogin);
    if (user && user.password === passwordLogin) {
      setCurrentUser(user.username);
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", JSON.stringify(user));

      console.log(user.username);
      console.log(currentUser);
      setMessage("Login successful!");
      console.log("Logged in as", isLoggedIn);

      const storedFavorites =
        JSON.parse(localStorage.getItem("favoriteMovies")) || {};
      setFavoriteMovies(storedFavorites[user.id] || {});
    } else {
      setMessage("Invalid username or password.");
    }
    setUsernameLogin("");
    setPasswordLogin("");
  };

  const addFavoriteMovie = (movieId) => {
    setFavoriteMovies([...favoriteMovies, movieId]);
  };

  const removeFavoriteMovie = (movieId) => {
    const updatedFavorites = favoriteMovies.filter((id) => id !== movieId);
    setFavoriteMovies(updatedFavorites);
  };

  const toggleFavoriteMovie = (userId, movieId) => {
    // update the favoriteMovies state using the setFavoriteMovies function and the previous value of the state
    setFavoriteMovies((prevFavorites) => {
      // get the user's favorite movies or an empty array if the user has not set any favorites yet
      const userFavorites = prevFavorites[userId] || [];
      // check if the movie is already in the user's favorites
      const index = userFavorites.indexOf(movieId);
      // if the movie is not already in the user's favorites, add it to the array of favorites
      if (index === -1) {
        return {
          ...prevFavorites,
          [userId]: [...userFavorites, movieId],
        };
      } else {
        // if the movie is already in the user's favorites, remove it from the array of favorites
        userFavorites.splice(index, 1);
        return {
          ...prevFavorites,
          [userId]: userFavorites,
        };
      }
    });
  };

  const values = {
    users,
    setUsers,
    newUser,
    setNewUser,
    usernameLogin,
    setUsernameLogin,
    passwordLogin,
    setPasswordLogin,
    message,
    setMessage,
    isLoggedIn,
    setIsLoggedIn,
    handleAddUser,
    handleInputChange,
    handleInputChange2,
    handleKeyPress,
    handleLogout,
    checkUserCredentials,
    currentUser,
    setCurrentUser,
    addFavoriteMovie,
    removeFavoriteMovie,
    toggleFavoriteMovie,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
