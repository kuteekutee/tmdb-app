import axios from "axios";
import { useState } from "react";
import { Cards } from "../components/Cards";

export const Search = () => {
  const [searchData, setSearchData] = useState({});
  const [queryText, setQueryText] = useState("");
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "ee1966b7f6d002de644810b7fd884a69";

  const getApi = async () => {
    try {
      const api = `${baseURL}/search/movie?api_key=${apiKey}&query=${queryText}`;
      const response = await axios.get(api);

      console.log("Get STATUS: ", response.status);
      const data = response.data.results;
      const filteredData = data.filter(
        (item) => !(item.poster_path === null || item.overview === "")
      );
      // console.log(JSON.stringify(filteredData));
      setSearchData(filteredData);
    } catch (error) {
      console.log("Data error", error);
    }
  };
  const handleChange = (e) => {
    setQueryText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (queryText === "") return;

    getApi();
  };

  return (
    <>
      <div className="container is-align-items-flex-end">
        <nav className="level">
          <div className="level-item">
            <form>
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="search"
                    value={queryText}
                    onChange={handleChange}
                    placeholder="Find a movie"
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-info"
                    name="buttonSearch"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </p>
              </div>
            </form>
          </div>
        </nav>
        {searchData.length > 0 ? (
          <Cards list={searchData} contentType="movie" />
        ) : null}
      </div>
    </>
  );
};
