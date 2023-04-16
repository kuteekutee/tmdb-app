import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UsersProvider } from "../contexts/UsersContext";
import ViewSimilar from "./ViewSimilar";
import { ViewSimilar } from "./index";
import axios from "axios";

const apiImage = `https://image.tmdb.org/t/p/w400/`;
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";
  const api = `${baseURL}/movie/${params.id}?api_key=${apiKey}`;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const data = response.data;
        //console.log(JSON.stringify(data));
        setMovieDetails(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);
  return (
    <>
      <div className="section is-marginless">
        <div className="columns is-vcentered">
          <div className="column is-3">
            <p className="bd-notification">
              <figure className="image">
                <img
                  className="is-rounded"
                  src={`${apiImage}${movieDetails.poster_path}`}
                  alt=""
                  style={{ maxWidth: "256px" }}
                />
              </figure>
            </p>
          </div>
          <div className="column">
            <p className="bd-notification">
              <div className="content is-5">
                <h1 className="title">{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
                <p>Released: {movieDetails.release_date}</p>
                <p>Runtime: {movieDetails.runtime} mins</p>
                {movieDetails.revenue > 0 && (
                  <p>Revenue: {formatter.format(movieDetails.revenue)}</p>
                )}
                <p>
                  <a
                    href={movieDetails.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {movieDetails.homepage}
                  </a>
                </p>
                <p>
                  {movieDetails.genres ? (
                    <div className="tags are-medium">
                      {movieDetails.genres.map((genre, index) => (
                        <span className="tag is-info" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </p>
          </div>
        </div>
        <div>
          <ViewSimilar movieId={params.id} />
        </div>
      </div>
    </>
  );
};
