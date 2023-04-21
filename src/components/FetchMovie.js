import { useState, useEffect } from "react";
import { useFavourites } from "../contexts/FavouritesContext";
const apiImage = `https://image.tmdb.org/t/p/w500/`;

export const FetchMovie = ({ fav }) => {
  const [movieTv, setMovieTv] = useState({});
  const { removeFromFavourites } = useFavourites();

  useEffect(() => {
    console.log(fav);
    if (fav.title === undefined) {
      setMovieTv({
        id: fav.id,
        poster_path: fav.poster_path,
        title: fav.name,
        overview: fav.overview,
      });
    } else {
      setMovieTv({
        id: fav.id,
        poster_path: fav.poster_path,
        title: fav.title,
        overview: fav.overview,
      });
    }
  }, [fav]);
  return (
    <>
      <div className="columns is-vcentered py-4">
        <div className="column is-narrow">
          <div className="container">
            <img
              src={`${apiImage}${movieTv.poster_path}`}
              alt={movieTv.title}
              style={{ maxWidth: "180px" }}
            />
          </div>
        </div>
        <div className="column is-three-fifths">
          <div className="content is-5">
            <h1 className="title">{movieTv.title}</h1>
            <p>{movieTv.overview}</p>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div class="block">
            <span class="tag is-danger">
              Remove
              <button
                class="delete is-small"
                onClick={() => removeFromFavourites(movieTv)}
              ></button>
            </span>
          </div>
          {/* <button
            className="delete is-primary is-medium"
            onClick={() => removeFromFavourites(movieTv)}
          ></button> */}
        </div>
      </div>
      {/* <section className="section">
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128 ml-6">
              <img
                src={`${apiImage}${movieTv.poster_path}`}
                alt={movieTv.title}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="subtitle">{movieTv.title}</p>
              <p>{movieTv.overview}</p>
            </div>
          </div>
          <div className="media-right">
            <button
              className="delete is-medium"
              onClick={() => removeFromFavourites(movieTv)}
            ></button>
          </div>
        </article>
      </section> */}
    </>
  );
};
