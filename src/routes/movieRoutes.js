import { Routes, Route } from "react-router-dom";
import { Flex, Home, About, TopRatedMovies, TopRatedTV } from "../pages";

export const MovieRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/top-rated-movies" element={<TopRatedMovies />} />
          <Route path="/top-rated-tv" element={<TopRatedTV />} />
          <Route path="/about" element={<About />} />
          <Route path="/flex" element={<Flex />} />
        </Route>
      </Routes>
    </>
  );
};
