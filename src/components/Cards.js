import { Link } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";

const apiImage = `https://image.tmdb.org/t/p/w500/`;
export const Cards = ({ list, contentType }) => {
  const { addToFavourites } = useFavourites();
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {list.map((item) => (
              <div key={item.id} className="column is-one-third">
                <article className="media">
                  <div className="media-content">
                    <div className="notification is-link is-light">
                      <figure className="image">
                        <img
                          className="is-rounded"
                          src={`${apiImage}${item.poster_path}`}
                          alt={item.id}
                        />
                      </figure>
                      <div className="is-link has-text-centered">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={
                            contentType === "movie"
                              ? `/movie/${item.id}`
                              : `/tv/${item.id}`
                          }
                        >
                          <div className="p-4 is-size-6">
                            {contentType === "movie" ? item.title : item.name}
                          </div>
                        </Link>
                      </div>
                      <div className="columns">
                        <div className="column px-0">
                          <p className="is-size-7 mt-0 has-text-centered px-1 mt-1">
                            {contentType === "movie"
                              ? item.release_date
                              : item.first_air_date}
                          </p>
                        </div>
                        <div className="column px-0">
                          <button
                            onClick={() => addToFavourites(item.id)}
                            className="button is-small is-link px-2 is-rounded"
                          >
                            Add to Favourites
                          </button>
                        </div>
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
