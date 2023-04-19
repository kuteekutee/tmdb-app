import { Link } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";
import { useAuth } from "../contexts/AuthContext";

const apiImage = `https://image.tmdb.org/t/p/w500/`;
export const Cards = ({ list, contentType }) => {
  const { isSignedIn } = useAuth();
  const { addToFavourites, favouritesList, removeFromFavourites } =
    useFavourites();

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {list.map((item) => (
              <div key={item.id} className="column is-one-third">
                <article className="media">
                  <div className="media-content">
                    <div className="notification is-light is-white is-rounded">
                      <figure className="image pl-4">
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
                            contentType === "movie"
                              ? `movie/${item.id}`
                              : `tv/${item.id}`
                          }
                        >
                          <div className="p-4 is-size-6">
                            {contentType === "movie" ? item.title : item.name}
                          </div>
                        </Link>
                      </div>
                      <div className="columns has-text-centered">
                        <div className="column">
                          <p className="is-size-7 mt-0 has-text-centered px-1 mt-1">
                            {contentType === "movie"
                              ? item.release_date
                              : item.first_air_date}
                          </p>
                        </div>

                        {isSignedIn && (
                          <div className="column">
                            {!favouritesList.find(
                              (fav) => fav.id === item.id
                            ) ? (
                              <span
                                className="tag is-success is-small"
                                onClick={() => addToFavourites(item)}
                              >
                                Favourites +
                              </span>
                            ) : (
                              <span
                                className="tag is-danger is-small"
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
