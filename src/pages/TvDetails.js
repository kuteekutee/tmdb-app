import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ViewSimilarTv } from "./ViewSimilarTv";
import axios from "axios";
const apiImage = `https://image.tmdb.org/t/p/w500/`;

export const TvDetails = () => {
  const params = useParams();
  const [tvDetails, setTvDetails] = useState({});
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";
  const api = `${baseURL}/tv/${params.id}?api_key=${apiKey}`;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);
        console.log("Get STATUS: ", response.status);
        const data = response.data;
        // console.log(JSON.stringify(data));
        setTvDetails(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);

  return (
    <>
      <div className="container  px-4 py-0">
        <h2 className="title ml-2">Details</h2>
        <div className="columns is-vcentered is-centered">
          <div className="column is-4">
            <div className="bd-notification">
              <figure className="image">
                <img
                  className="is-square mx-2"
                  src={
                    tvDetails.poster_path === undefined
                      ? ""
                      : `${apiImage}${tvDetails.poster_path}`
                  }
                  alt=""
                  style={{ maxWidth: "256px" }}
                />
              </figure>
            </div>
          </div>
          <div className="column">
            <div className="bd-notification">
              <div className="content is-6">
                <div className="title">{tvDetails.name}</div>
                <p>{tvDetails.overview}</p>
                <p>First Aired on {tvDetails.first_air_date}</p>
                <p>
                  {tvDetails.vote_average} average of {tvDetails.vote_count}{" "}
                  votes
                </p>
                <p>
                  {tvDetails.genres ? (
                    <div className="tags are-medium">
                      {tvDetails.genres.map((genre, index) => (
                        <span className="tag is-warning" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ViewSimilarTv tvId={params.id} />
        </div>
      </div>
    </>
  );
};
