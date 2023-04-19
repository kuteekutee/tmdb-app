export const favouritesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVOURITES": {
      return { ...state, favouritesList: payload.favourites };
    }
    case "REMOVE_FROM_FAVOURITES":
      return { ...state, favouritesList: payload.favourites };
    case "REMOVE_ALL_FROM_FAVOURITES":
      return { ...state, favouritesList: payload.favourites };

    case "GET_STORE_FAVOURITES":
      return { ...state, favouritesList: payload.storedFavourites };

    default:
      throw new Error("No cases found in favouritesReducer!");
  }
};
