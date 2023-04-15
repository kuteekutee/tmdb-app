import { useEffect, useState } from "react";
import axios from "axios";

import { Cards } from "../components/Cards";
export const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";

  useEffect(() => {
    const getApi = async () => {
      let api = `${baseURL}/movie/top_rated?api_key=${apiKey}&page=${page}`;
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        setTotalPages(response.data.total_pages);
        const data = response.data.results;
        //console.log(JSON.stringify(data));
        //console.log("page", page);
        setTopRatedMovies(data);
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
      <h2 className="title">Top Rated Movies</h2>
      <div className="container mt-4">
        <div className="columns is-vcentered is-centered">
          <div className="column">
            <span onClick={() => getPrev()} className="button" name="prev">
              Previous
            </span>
          </div>
          <div className="column">
            <span>
              {page}/{totalPages}
            </span>
          </div>
          <div className="column">
            <span onClick={() => getNext()} className="button" name="next">
              Next
            </span>
          </div>
        </div>
      </div>

      <Cards list={topRatedMovies} contentType="movie" />
    </>
  );
};
