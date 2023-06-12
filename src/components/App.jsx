import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { lazy } from 'react';
import HomePage from '../page/HomePage';
import MoviesPage from '../page/MoviesPage';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// const HomePage = lazy(()=> import('../page/HomePage'))
// const MoviesPage = lazy(()=> import('../page/MoviesPage'))
// const MovieDetails = lazy(()=> import('./MovieDetails/MovieDetails'))
// const Cast = lazy(()=> import('./Cast/Cast'))
// const Reviews = lazy(()=> import('./Reviews/Reviews'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
