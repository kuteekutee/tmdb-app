import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SimilarMovies = () =>{
    const [similarMovies, setSimilarMovies] = useState([]); 
    const params = useParams();
    const baseURL = "https://api.themoviedb.org/3";
    const apiKey = "ee1966b7f6d002de644810b7fd884a69";
    const api = `${baseURL}/movie/${params.id}/similar?api_key=${apiKey}`; // is this correct? the params.id?
useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const data = response.data.results;
        console.log(JSON.stringify(data));
        setSimilarMovies(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);

  return (
    <>
      <Cards list={similarMovies} contentType="movie" />
    </>
  );
};


export default SimilarMovies