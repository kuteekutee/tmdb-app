import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="flex-container">
        <div className="flex-item-1">
          <img
            className="rounded-corners"
            src={`${apiImage}${tvDetails.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-item-2">
          <h1>{tvDetails.name}</h1>
          <p>{tvDetails.overview}</p>
          <p>First Aired on {tvDetails.first_air_date}</p>
          <p>
            {tvDetails.vote_average} average of {tvDetails.vote_count} votes
          </p>

          {tvDetails.genre_ids ? (
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              {tvDetails.genre_ids[0]}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
