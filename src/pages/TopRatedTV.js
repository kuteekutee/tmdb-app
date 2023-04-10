import { useEffect, useState } from "react";
import axios from "axios";

import { Cards } from "../components/Cards";
export const TopRatedTV = () => {
  const [topRatedTV, setTopRatedTV] = useState([]);
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";
  const api = `${baseURL}/tv/top_rated?api_key=${apiKey}`;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const data = response.data.results;
        console.log(JSON.stringify(data));
        setTopRatedTV(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [api]);

  return (
    <>
      <Cards list={topRatedTV} />
    </>
  );
};
