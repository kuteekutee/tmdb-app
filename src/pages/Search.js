//import "bulma/css/bulma.min.css";
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
      console.log(JSON.stringify(data));
      setSearchData(data);
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
      <div className="container">
        <section className="hero is-small">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column">
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
                            placeholder="Find a post"
                          />
                        </p>
                        <p className="control">
                          <button
                            className="button"
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
              </div>
            </div>
          </div>
          {searchData.length > 0 && (
            <Cards list={searchData} contentType="movie" />
          )}
        </section>
      </div>
    </>
  );
};
