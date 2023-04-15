import { createContext, useContext, useReducer } from "react";
import { favouritesReducer } from "../reducers/favouritesReducer";

const initialState = {
  favouritesList: [],
  // favouritesList: [238, 278, 240, 389, 497, 680, 13],
};

const FavouritesContext = createContext(initialState);

export const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  const addToFavourites = (movieId) => {
    const updatedFavouritesList = state.favouritesList.concat(movieId);
    console.log(updatedFavouritesList);
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: {
        movies: updatedFavouritesList,
      },
    });
  };

  const removeFromFavourites = (movieId) => {
    const updatedFavouritesList = state.favouriteList.filter(
      (item) => item.id !== movieId
    );
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: {
        movies: updatedFavouritesList,
      },
    });
  };

  const value = {
    favouritesList: state.favouritesList,
    addToFavourites,
    removeFromFavourites,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
