import { useState, useEffect } from "react";
import { useFavourites } from "../contexts/FavouritesContext";
const apiImage = `https://image.tmdb.org/t/p/w400/`;
// const baseURL = "https://api.themoviedb.org/3";
// const apiKey = "ee1966b7f6d002de644810b7fd884a69";

export const FetchMovie = ({ fav }) => {
  const [movieTv, setMovieTv] = useState({});
  const { removeFromFavourites } = useFavourites();

  useEffect(() => {
    console.log(fav);
    if (fav.title === undefined) {
      setMovieTv({
        id: fav.id,
        poster_path: fav.poster_path,
        title: fav.title,
        overview: fav.overview,
      });
    } else {
      setMovieTv({
        id: fav.id,
        poster_path: fav.poster_path,
        title: fav.name,
        overview: fav.overview,
      });
    }

    //   const getMovieApi = async (id) => {
    //     try {
    //       const movieApi = `${baseURL}/movie/${id}?api_key=${apiKey}`;
    //       let response = await axios.get(movieApi);
    //       console.log("Get movie STATUS: ", response.status);
    //       let data = response.data;
    //       //console.log(JSON.stringify(data));
    //       if (data) {
    //         setMovieTv({
    //           id: data.id,
    //           poster_path: data.poster_path,
    //           title: data.title,
    //           overview: data.overview,
    //         });
    //       } else {
    //         const tvApi = `${baseURL}/tv/${id}?api_key=${apiKey}`;
    //         response = await axios.get(tvApi);
    //         console.log("Get tv STATUS: ", response.status);
    //         data = response.data;
    //         setMovieTv({
    //           id: data.id,
    //           poster_path: data.poster_path,
    //           title: data.name,
    //           overview: data.overview,
    //         });
    //       }
    //     } catch (error) {
    //       console.log("Data error", error);
    //     }
    //   };
    //   getMovieApi(id);
    // }, [id]);
  }, [fav]);
  return (
    <>
      <section className="section">
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
      </section>
    </>
  );
};
