import { useEffect, useState } from "react";
import axios from "axios";

import { TrendList } from "../components/TrendList";
export const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";

  useEffect(() => {
    const getApi = async () => {
      let api = `${baseURL}/trending/all/day?api_key=${apiKey}&page=${page}`;
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        setTotalPages(response.data.total_pages);
        const data = response.data.results;
        const filteredData = data.filter(
          (item) => !(item.poster_path === null || item.overview === "")
        );
        //console.log(JSON.stringify(data));
        //console.log("page", page);
        setTrending(filteredData);
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
        <h2 className="title ml-6">Trending All Day</h2>
        <div className="columns is-vcentered is-centered">
          <div className="column">
            <span onClick={() => getPrev()} className="button" name="prev">
              Previous
            </span>
          </div>
          <div className="column">
            <span>
              {page} | {totalPages}
            </span>
          </div>
          <div className="column">
            <span onClick={() => getNext()} className="button" name="next">
              Next
            </span>
          </div>
        </div>
      </div>

      <TrendList list={trending} />
    </>
  );
};
