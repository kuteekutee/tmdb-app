import axios from "axios";
import { useState } from "react";
import { Cards } from "../components/Cards";

export const Search = () => {
  const [searchMovieData, setSearchMovieData] = useState({});
  const [searchTvData, setSearchTvData] = useState({});
  const [movieQueryText, setMovieQueryText] = useState("");
  const [tvQueryText, setTvQueryText] = useState("");
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";

  const getMovieApi = async () => {
    try {
      const api = `${baseURL}/search/movie?api_key=${apiKey}&query=${movieQueryText}`;
      const response = await axios.get(api);

      console.log("Get STATUS: ", response.status);
      const data = response.data.results;
      const filteredData = data.filter(
        (item) => !(item.poster_path === null || item.overview === "")
      );
      // console.log(JSON.stringify(filteredData));
      setSearchMovieData(filteredData);
    } catch (error) {
      console.log("Data error", error);
    }
  };
  const getTvApi = async () => {
    try {
      const api = `${baseURL}/search/tv?api_key=${apiKey}&query=${tvQueryText}`;
      const response = await axios.get(api);

      console.log("Get STATUS: ", response.status);
      const data = response.data.results;
      const filteredData = data.filter(
        (item) => !(item.poster_path === null || item.overview === "")
      );
      // console.log(JSON.stringify(filteredData));
      setSearchTvData(filteredData);
    } catch (error) {
      console.log("Data error", error);
    }
  };
  const handleMovieChange = (e) => {
    setMovieQueryText(e.target.value);
  };
  const handleTvChange = (e) => {
    setTvQueryText(e.target.value);
  };
  const handleMovieSearch = (e) => {
    e.preventDefault();
    if (movieQueryText === "") return;
    setSearchTvData({});
    setTvQueryText("");
    getMovieApi();
  };
  const handleTvSearch = (e) => {
    e.preventDefault();
    if (tvQueryText === "") return;
    setSearchMovieData({});
    setMovieQueryText("");
    getTvApi();
  };

  return (
    <>
      {/* <h2 className="subtitle">Search Movies!</h2> */}
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="container mt-4 is-align-items-flex-end">
            <nav className="level">
              <div className="level-item">
                <form>
                  <div className="field has-addons">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        name="movieSearch"
                        value={movieQueryText}
                        onChange={handleMovieChange}
                        placeholder="movie search"
                      />
                    </p>
                    <p className="control">
                      <button
                        className="button is-info"
                        name="buttonSearch"
                        onClick={handleMovieSearch}
                      >
                        Search
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="column is-half">
          <div className="container mt-4 is-align-items-flex-end">
            <nav className="level">
              <div className="level-item">
                <form>
                  <div className="field has-addons">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        name="tvSearch"
                        value={tvQueryText}
                        onChange={handleTvChange}
                        placeholder="Tv shows search"
                      />
                    </p>
                    <p className="control">
                      <button
                        className="button is-info"
                        name="buttonSearch"
                        onClick={handleTvSearch}
                      >
                        Search
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="column is-full">
          {searchMovieData.length > 0 ? (
            <Cards list={searchMovieData} contentType="movie" />
          ) : null}
          {searchTvData.length > 0 ? (
            <Cards list={searchTvData} contentType="tv" />
          ) : null}
        </div>
      </div>
    </>
  );
};
