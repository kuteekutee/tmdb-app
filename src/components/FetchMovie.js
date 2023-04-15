import { useState, useEffect } from "react";
import axios from "axios";

const apiImage = `https://image.tmdb.org/t/p/w500/`;
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "ee1966b7f6d002de644810b7fd884a69";

export const FetchMovie = ({ id }) => {
  const [movie, setMovie] = useState({});
  let api = `${baseURL}/movie/${id}?api_key=${apiKey}`;

  useEffect(() => {
    const getMovieApi = async (id) => {
      try {
        const response = await axios.get(api);
        console.log("Get STATUS: ", response.status);
        const data = response.data;
        //console.log(JSON.stringify(data));
        setMovie({
          id: data.id,
          poster_path: data.poster_path,
          title: data.title,
          overview: data.overview,
        });
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getMovieApi(id);
  }, [api, id]);
  return (
    <>
      <section className="section">
        <article className="media">
          <figure className="media-left">
            <p className="image is-128x128">
              <img src={`${apiImage}${movie.poster_path}`} alt={movie.title} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="subtitle">{movie.title}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="media-right">
            <button className="delete is-medium"></button>
          </div>
        </article>
      </section>
    </>
  );
};
