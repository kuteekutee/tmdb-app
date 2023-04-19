import { createContext, useContext, useEffect, useReducer } from "react";
import { favouritesReducer } from "../reducers/favouritesReducer";
import { useAuth } from "./AuthContext";

const initialState = {
  favouritesList: [],
};

const FavouritesContext = createContext(initialState);

export const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  const { authUser, isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      localStorage.setItem(authUser, JSON.stringify(state.favouritesList));
    }
  }, [authUser, isSignedIn, state.favouritesList]);

  const addToFavourites = (fav) => {
    const updatedFavouritesList = state.favouritesList.concat(fav);
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: {
        favourites: updatedFavouritesList,
      },
    });
  };

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
  };
  const removeAllFromFavourites = () => {
    dispatch({
      type: "REMOVE_ALL_FROM_FAVOURITES",
      payload: {
        favourites: [],
      },
    });
  };

  const loadFromLocalStorage = () => {
    if (authUser) {
      const storeData = localStorage.getItem(authUser);
      const storedFav = storeData ? JSON.parse(storeData) : [];
      console.log("in loadFromLocalStorage ===>", storedFav);

      dispatch({
        type: "GET_STORE_FAVOURITES",
        payload: {
          storedFavourites: storedFav,
        },
      });
    }
  };

  const value = {
    favouritesList: state.favouritesList,
    addToFavourites,
    removeFromFavourites,
    loadFromLocalStorage,
    removeAllFromFavourites,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
