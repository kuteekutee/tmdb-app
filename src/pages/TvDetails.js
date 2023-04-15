import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ViewSimilarTv } from "./ViewSimilarTv";
import axios from "axios";
const apiImage = `https://image.tmdb.org/t/p/w400/`;

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
        console.log(JSON.stringify(data));
        setTvDetails(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);

  return (
    <>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-3">
            <p className="bd-notification">
              <figure className="image">
                <img
                  className="is-rounded"
                  src={`${apiImage}${tvDetails.poster_path}`}
                  alt=""
                  style={{ maxWidth: "256px" }}
                />
              </figure>
            </p>
          </div>
          <div className="column">
            <p className="bd-notification">
              <div className="content is-5">
                <h1>{tvDetails.name}</h1>
                <p>{tvDetails.overview}</p>
                <p>First Aired on {tvDetails.first_air_date}</p>
                <p>
                  {tvDetails.vote_average} average of {tvDetails.vote_count}{" "}
                  votes
                </p>
                <p>
                  {tvDetails.genres ? (
                    <div class="tags are-medium">
                      {tvDetails.genres.map((genre, index) => (
                        <span className="tag is-info" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </p>
                {/* {tvDetails.genres.map((item) => (
                  <p>{item.name}</p>
                ))} */}
              </div>
            </p>
          </div>
        </div>
        <div>
          <ViewSimilarTv tvId={params.id} />
        </div>
      </div>
    </>
  );
};
