/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useFavourites } from "../contexts/FavouritesContext";
import { FetchMovie } from "../components/FetchMovie";

export const Favourites = () => {
  const ctx = useFavourites();
  console.log(ctx.favouritesList);
  return (
    <>
      <div className="section">
        <h2 className="title">Favourites</h2>
        {ctx.favouritesList.map((item) => (
          <FetchMovie id={item} key={item} />
        ))}
      </div>
    </>
  );
};
