import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewSimilar from "./ViewSimilar.js"
import axios from "axios";
// import Logo from "../assets/images/logo.png";
const apiImage = `https://image.tmdb.org/t/p/w400/`;
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
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Released: {movieDetails.release_date}</p>
          <p>Runtime: {movieDetails.runtime} mins</p>
          <p>Revenue: {movieDetails.revenue}</p>
          <a
            className="homepage"
            href={movieDetails.homepage}
            target="_blank"
            rel="noreferrer"
          >
            {movieDetails.homepage}
          </a>
          {movieDetails.genres ? (
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              {movieDetails.genres.map((genre, index) => (
                <span key={genre.id} className="movieGenre">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          
           </div>
           <div><ViewSimilar movieId={params.id} /></div>
        </div>
        
    </>
  );
};
