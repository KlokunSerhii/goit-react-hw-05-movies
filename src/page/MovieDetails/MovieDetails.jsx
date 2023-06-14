import { useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { BsEraser } from 'react-icons/bs';
import { Container, Img, Items, BackLink } from './MovieDetails.styled';
import { getMovieById } from 'services/api';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { UrlImg, UrlBgImg } from '../../utils/UrlImg';
import Loader from 'components/Loader';
import { useStateContext } from 'contex/StateContext';

function MovieDetails() {
  const { data, setData } = useStateContext();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setData(data))
      .catch(<BsEraser />);
  }, [movieId, setData]);
  return (
    <>
      <BackLink>
        <Link to={backLinkHref.current}>Back</Link>
      </BackLink>
      <Container
        style={{
          backgroundImage: `url(${UrlBgImg(data.backdrop_path)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Img
          src={UrlImg(data.poster_path)}
          alt={data.original_name}
          loading="lazy"
        />
        <Items>
          <h1>{data.title}</h1>
          <p>
            Popularity <span>{data.popularity}</span>
          </p>

          <p>ABOUT</p>
          <p>{data.overview}</p>
        </Items>
      </Container>

      <Navbar
        bg="dark"
        variant="dark"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <Nav className="me-auhref">
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </Nav>
        </div>
      </Navbar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
