import { createContext, useContext, useReducer } from "react";
import { favouritesReducer } from "../reducers/favouritesReducer";
// import { useAuth } from "./AuthContext";

const initialState = {
  favouritesList: [{}],
};

const FavouritesContext = createContext(initialState);

export const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  // const { authUser } = useAuth();

  const addToFavourites = (fav) => {
    const updatedFavouritesList = state.favouritesList.concat(fav);
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: {
        favourites: updatedFavouritesList,
      },
    });
  };
  // const addToFavourites = (movieId) => {
  //   const updatedFavouritesList = state.favouritesList.concat(movieId);
  //   dispatch({
  //     type: "ADD_TO_FAVOURITES",
  //     payload: {
  //       user: authUser,
  //       movies: updatedFavouritesList,
  //     },
  //   });
  // };

  const removeFromFavourites = (fav) => {
    const updatedFavouritesList = state.favouritesList.filter(
      (item) => item.id !== fav.id
    );
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: {
        favourites: updatedFavouritesList,
      },
    });
    // if (!authUser) {
    //   localStorage.setItem(
    //     // currUser["email"],
    //     authUser,
    //     JSON.stringify(state.favouritesList)
    //   );
    // }
  };

  // const loadFromLocalStorage = (user) => {
  //   const storedFavourites = JSON.parse(localStorage.getItem("bernard"));
  //   console.log("in loadFromStorage", storedFavourites);
  //   if (!storedFavourites) return [];
  //   dispatch({
  //     type: "GET_STORE_FAVOURITES",
  //     payload: {
  //       storedFavourites: storedFavourites,
  //     },
  //   });
  // };

  const value = {
    favouritesList: state.favouritesList,
    addToFavourites,
    removeFromFavourites,
    // loadFromLocalStorage,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
