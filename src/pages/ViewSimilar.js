import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const apiImage = `https://image.tmdb.org/t/p/w400/`;
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "ee1966b7f6d002de644810b7fd884a69";

const SimilarMovieWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  max-width: calc(150px * 7);
  overflow-y: hidden;
 
`;

const SimilarMovieItem = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 600 px;
  max-width: 150px;
  text-align: center;

  .similar-movie-poster {
    max-width: 100%;
  }

  .similar-movie-title {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
`;


const ViewSimilar = ({ movieId }) => {
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const getSimilarMovie = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/movie/${movieId}/similar?api_key=${apiKey}`
        );
        setSimilarMovie(response.data.results);
      } catch (error) {
        console.log("Error fetching similar movies", error);
      }
    };
    getSimilarMovie();
  }, [movieId]);

  return (
    <div className="similar-movies-container">
      <h2>Similar Movies</h2>
      <SimilarMovieWrapper>
        {similarMovie.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <SimilarMovieItem>
              <img
                src={`${apiImage}${movie.poster_path}`}
                alt=""
                className="similar-movie-poster"
              />
              <p className="similar-movie-title">{movie.title}</p>
            </SimilarMovieItem>
          </Link>
        ))}
      </SimilarMovieWrapper>
    </div>
  );
};

export default ViewSimilar;
