import { Routes, Route, Outlet } from "react-router-dom";
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
  function Dashboard() {
    return (
      <div className="hero is-fullheight">
        <Outlet />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Dashboard />}>
          <Route path="trending" element={<Dashboard />}>
            <Route index element={<Trending />} />
          </Route>
          <Route path="movies" element={<Dashboard />}>
            <Route index element={<TopRatedMovies />} />
            <Route path="movie/:id" element={<MovieDetails />} />
          </Route>
          <Route path="tv-shows" element={<Dashboard />}>
            <Route index element={<TopRatedTV />} />
            {/* <Route path="tv-shows" element={<TopRatedTV />} /> */}
            <Route path="tv/:id" element={<TvDetails />} />
          </Route>
          <Route path="search" element={<Dashboard />}>
            <Route index element={<Search />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="tv/:id" element={<MovieDetails />} />
          </Route>
          <Route path="favourites" element={<Favourites />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
