import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

// import Home from '../page/Home/Home';
// import Movies from '../page/Movies';
// import MovieDetails from '../page/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import('../page/Home/Home.jsx'));
const Movies = lazy(() => import('../page/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('../page/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div> Nothing found </div>} />
      </Route>
    </Routes>
  );
};
