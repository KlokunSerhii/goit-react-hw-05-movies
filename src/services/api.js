import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '856f57e7a2f2f6acb1983cbef8b64e80';

export const fetchTrending = () => {
  const response = axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);
  return response;
};

export const fetchSearch = (query, page) => {
  const response = axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
    )
    .then(({ data }) => data);
  return response;
};

export const fetchMoviId = id => {
  const response = axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);
  return response;
};

export const fetchCredits = id => {
  const response = axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);
  return response;
};
export const fetchReviews = id => {
  const response = axios
    .get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => data);
  return response;
};
