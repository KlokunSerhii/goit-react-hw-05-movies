import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '856f57e7a2f2f6acb1983cbef8b64e80';

class ApiServices {
  fetchTrending = () => {
    const response = axios
      .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => data);
    return response;
  };

  fetchSearch = (query, page) => {
    const response = axios
      .get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
      )
      .then(({ data }) => data);
    return response;
  };

  fetchMoviId = id => {
    const response = axios
      .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => data);
    return response;
  };
}

export default ApiServices;
