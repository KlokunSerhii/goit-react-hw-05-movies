import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../page/Home';
import MoviesPage from '../page/Movies';
import MovieDetailsPage from '../page/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

// import { lazy } from 'react';

// const HomePage = lazy(() => import('../page/Home/Home'));
// const MoviesPage = lazy(() => import('../page/Movies'));
// const MovieDetailsPage = lazy(() =>
//   import('../page/MovieDetails/MovieDetails')
// );
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div> Nothing found </div>} />
      </Route>
    </Routes>
  );
};
