import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ApiServices from 'services/api';
import { Container, Img, Items } from './MovieDetails.styled';
function MovieDetails() {
  const [data, setData] = useState({});

  useEffect(() => {
    const Api = new ApiServices();
    Api.fetchMoviId(385687).then(data => setData(data));
  }, []);

  return (
    <>
      <Container>
        <Img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : 'https://via.placeholder.com/395x574?text=No+Image'
          }
          alt={data.original_name}
          loading="lazy"
        />
        <Items>
          <h1 className="modal__title">{data.title}</h1>
          <p className="modal__popularity">
            Popularity <span>{data.popularity}</span>
          </p>

          <p className="modal__about">ABOUT</p>
          <p className="modal__description">{data.overview}</p>
        </Items>
      </Container>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;
