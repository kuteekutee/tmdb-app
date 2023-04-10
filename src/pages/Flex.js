import { useEffect, useState } from "react";
import axios from "axios";
// import Logo from "../assets/images/logo.png";
const apiImage = `https://image.tmdb.org/t/p/w400/`;
export const Flex = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";
  const api = `${baseURL}/movie/238?api_key=${apiKey}`;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const data = response.data;
        console.log(JSON.stringify(data));
        setMovieDetails(data);
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
            src={`${apiImage}${movieDetails.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-item-2">
          <h1>Movie Details</h1>
          <p>Title: {movieDetails.title}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>Release date: {movieDetails.release_date}</p>
          {/* <p>
            Genres:
            {movieDetails.genres !== null &&
              movieDetails.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
          </p> */}
        </div>
      </div>
    </>
  );
};
