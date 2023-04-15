import { Routes, Route } from "react-router-dom";
import {
  TvDetails,
  MovieDetails,
  Home,
  About,
  Search,
  TopRatedMovies,
  TopRatedTV,
  Favourites,
} from "../pages";

export const MovieRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/top-rated-movies" element={<TopRatedMovies />} />
          <Route path="/top-rated-tv" element={<TopRatedTV />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TvDetails />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
};
