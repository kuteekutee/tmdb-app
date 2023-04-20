import { useEffect, useState } from "react";
import axios from "axios";

import { Cards } from "../components/Cards";
export const TopRatedTV = () => {
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";

  useEffect(() => {
    const getApi = async () => {
      let api = `${baseURL}/tv/top_rated?api_key=${apiKey}&page=${page}`;

      try {
        const response = await axios.get(api);
        console.log("Get STATUS: ", response.status);
        setTotalPages(response.data.total_pages);
        const data = response.data.results;
        // console.log(JSON.stringify(data));
        setTopRatedTV(data);
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, [page]);
  function getNext() {
    if (page + 1 <= totalPages) {
      setPage((prev) => prev + 1);
    }
  }
  function getPrev() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }
  return (
    <>
      <div className="container mt-4">
        <h2 className="title ml-6">Top Rated TV</h2>
        <div className="columns is-vcentered is-centered is-mobile">
          <div className="column is-narrow">
            <span
              onClick={() => getPrev()}
              className="button is-small"
              name="prev"
            >
              {"<<"}
            </span>
          </div>
          <div className="column is-narrow">
            <span className="box tag">
              {page} | {totalPages}
            </span>
          </div>
          <div className="column is-narrow">
            <span
              onClick={() => getNext()}
              className="button is-small"
              name="next"
            >
              {">>"}
            </span>
          </div>
        </div>
      </div>
      <Cards list={topRatedTV} contentType="tv" />
    </>
  );
};
