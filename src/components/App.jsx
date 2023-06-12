import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
// import HomePage from '../page/HomePage/HomePage';
// import MoviesPage from '../page/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../page/MovieDetailsPage/MovieDetailsPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const HomePage = lazy(()=> import('../page/HomePage/HomePage'))
const MoviesPage = lazy(()=> import('../page/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(()=> import('../page/MovieDetailsPage/MovieDetailsPage'))
const Cast = lazy(()=> import('./Cast/Cast'))
const Reviews = lazy(()=> import('./Reviews/Reviews'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
