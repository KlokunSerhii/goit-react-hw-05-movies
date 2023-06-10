import { Route, Routes } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/Home';
import Movies from './page/Movies';
import MovieDetails from './page/MovieDetails';
import Cast from './page/Cast';
import Reviews from './page/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
