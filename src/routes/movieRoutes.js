import { Routes, Route } from "react-router-dom";
import {
  Home,
  TvDetails,
  MovieDetails,
  Trending,
  Search,
  TopRatedMovies,
  TopRatedTV,
  Favourites,
  About,
  SignIn,
} from "../pages";

export const MovieRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/trending" element={<Trending />} />
          <Route path="/top-rated-movies" element={<TopRatedMovies />} />
          <Route path="/top-rated-tv" element={<TopRatedTV />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TvDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
