import { useFavourites } from "../contexts/FavouritesContext";
import { FetchMovie } from "../components/FetchMovie";

export const Favourites = () => {
  const { favouritesList } = useFavourites();
  return (
    <>
      <p className="title ml-6">Favourites</p>
      <div className="container is-paddingless is-marginless">
        {favouritesList.map((item) => (
          <FetchMovie fav={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
