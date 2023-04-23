import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const initState = {
  id: 0,
  posterImage: "",
  mediaType: "",
};
export const Home = () => {
  const [randomPick, setRandomPick] = useState(initState);
  useEffect(() => {
    let api = `${process.env.REACT_APP_API_BASEURL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;
    const getApi = async () => {
      try {
        const response = await axios.get(api);

        console.log("Get STATUS: ", response.status);
        const results = response.data.results;
        const data = results.filter((item) => !(item.poster_path === null));
        // console.log(JSON.stringify(filteredData));
        const randomData = data[Math.floor(Math.random() * data.length)];
        const posterPath =
          process.env.REACT_APP_API_IMAGEURL + randomData.poster_path;
        const mediaType = randomData.title ? "movie" : "tv";
        setRandomPick({
          id: randomData.id,
          posterImage: posterPath,
          mediaType: mediaType,
        });
      } catch (error) {
        console.log("Data error", error);
      }
    };
    getApi();
  }, []);

  return (
    <>
      <div className="container is-fullheight has-text-centered">
        <div className="columns is-vcentered is-centered">
          <div className="column m-2 is-one-third">
            <figure className="image">
              <img
                src={randomPick.posterImage}
                alt="Description"
                maxWidth="40%"
              />
            </figure>
          </div>
          <div className="column mx-4">
            <h1 className="title is-4">
              Welcome to {process.env.REACT_APP_TITLE}
            </h1>
            <h2 className="subtitle is-6">
              We are happy to announce that we have just released v0.1 of this
              application using TMDB's api. Still in beta phase, we would like
              to gather feedback from our viewers.
            </h2>
            <br />
            <p>
              We hope this beta site demonstrates the richness of comsuming data
              from external api(s).{" "}
            </p>
            <br />
            <p>
              TMDB-api is rich in features and comprehensive. It exposes useful
              information about movies, tv shows, what's trending-by-day or
              by-week. There is simply to many speak off ...
            </p>
            <br />
            <p>Enjoy!</p>
            <br />
            <p className="has-text-centered">
              <Link to="/all/trending" className="button is-medium is-ghost">
                See what's trending?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
