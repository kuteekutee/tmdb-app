export const favouritesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVOURITES": {
      return { ...state, favouritesList: payload.movies };
    }

    case "REMOVE_FROM_FAVOURITES":
      return { ...state, favouritesList: payload.movies };

    // case "UPDATE_TOTAL":
    //   return;

    default:
      throw new Error("No cases found in favouritesReducer!");
  }
};
