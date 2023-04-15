import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const apiImage = `https://image.tmdb.org/t/p/w400/`;
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "ee1966b7f6d002de644810b7fd884a69";

const SimilarTvWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  max-width: calc(150px * 7);
  overflow-y: hidden;
 
`;

const SimilarTvItem = styled.div`
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


const ViewSimilarTv = ({ tvId }) => {
  const [similarTv, setSimilarTv] = useState([]);

  useEffect(() => {
    const getSimilarTv = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/tv/${tvId}/similar?api_key=${apiKey}`
        );
        setSimilarTv(response.data.results);
      } catch (error) {
        console.log("Error fetching similar tv shows", error);
      }
    };
    getSimilarTv();
  }, [tvId]);

  return (
    <div className="similar-tv-container">
      <h2>Similar Tv Shows</h2>
      <SimilarTvWrapper>
        {similarTv.map((tv) => (
          <Link key={tv.id} to={`/tv/${tv.id}`}>
            <SimilarTvItem>
              <img
                src={`${apiImage}${tv.poster_path}`}
                alt=""
                className="similar-tv-poster"
              />
              <p className="similar-tv-title">{tv.title}</p>
            </SimilarTvItem>
          </Link>
        ))}
      </SimilarTvWrapper>
    </div>
  );
};

export default ViewSimilarTv;
