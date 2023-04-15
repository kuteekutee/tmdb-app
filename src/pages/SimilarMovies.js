import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../components/Cards";

const SimilarMovie = () => {
  const [similarMovie, setSimilarMovie] = useState([]);
  const params = useParams();
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";
  const api = `${baseURL}/movie/${params.id}/similar?api_key=${apiKey}`;
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const data = response.data.results;
        //console.log(JSON.stringify(data));
        setSimilarMovie(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);

  return (
    <>
      <Cards list={similarMovie} contentType="movie" />
    </>
  );
};

export default SimilarMovie;
