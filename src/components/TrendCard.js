import { Link } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";
import { useAuth } from "../contexts/AuthContext";

const apiImage = `https://image.tmdb.org/t/p/w400/`;
export const TrendCard = ({ item }) => {
  const { addToFavourites, favouritesList, removeFromFavourites } =
    useFavourites();
  const { isSignedIn } = useAuth();
  const mediaType = item.media_type;
  return (
    // <article>
    <div key={item.id} className="column is-one-third">
      <article className="media">
        <div className="media-content">
          <div className="notification is-light is-white is-rounded">
            <figure className="image pl-4">
              <div>{mediaType}</div>
              <img
                className="is-square"
                src={`${apiImage}${item.poster_path}`}
                alt={item.id}
              />
            </figure>
            <div className="is-link has-text-centered">
              <Link
                style={{ textDecoration: "none" }}
                to={
                  mediaType === "movie"
                    ? `/all/movies/movie/${item.id}`
                    : `all/tv-shows/tv/${item.id}`
                }
              >
                <div className="p-4 is-size-6">
                  {mediaType === "movie" ? item.title : item.name}
                </div>
              </Link>
            </div>
            <div className="columns">
              <div className="column px-0">
                <p className="is-size-7 mt-0 has-text-centered px-1 mt-1">
                  {mediaType === "movie"
                    ? item.release_date
                    : item.first_air_date}
                </p>
              </div>
              {isSignedIn && (
                <div className="column px-0">
                  {favouritesList &&
                  !favouritesList.find((fav) => fav.id === item.id) ? (
                    <span
                      className="tag is-success is-small"
                      onClick={() => addToFavourites(item)}
                    >
                      Favourites +
                    </span>
                  ) : (
                    <span
                      class="tag is-danger is-small"
                      onClick={() => removeFromFavourites(item)}
                    >
                      Remove -
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
    // </article>
  );
};
