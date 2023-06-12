import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams,useLocation, Link } from 'react-router-dom';
import { fetchMoviId } from 'services/api';
import { Container, Img, Items,BackLink } from './MovieDetails.styled';
import { Nav, Navbar } from 'react-bootstrap';
import { StyledLink } from 'components/Layout/Layout.styled';

function MovieDetails() {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");



  useEffect(() => {
    fetchMoviId(movieId).then(data => setData(data));
  }, [movieId]);

  return (
    <>
    <BackLink>
      <Link to={backLinkHref.current}>Back</Link>
      </BackLink>
      
      
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
      <Suspense fallback={<div>Loading...</div>}> 
           <Outlet /> 
      </Suspense>
      
    </>
  );
}

export default MovieDetails;
