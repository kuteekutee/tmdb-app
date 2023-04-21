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
      <div className="section p-2">
        <div className="tag is-medium has-text-weight-bold">Favourites</div>

        {favouritesList.map((item) => (
          <FetchMovie fav={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
