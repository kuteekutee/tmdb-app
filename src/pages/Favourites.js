import { useFavourites } from "../contexts/FavouritesContext";
import { FetchMovie } from "../components/FetchMovie";
import { useNavigate } from "react-router-dom";
export const Favourites = () => {
  const { favouritesList } = useFavourites();
  const navigate = useNavigate();

  if (favouritesList.length === 0) navigate("/all/trending");
  favouritesList.reverse();

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
