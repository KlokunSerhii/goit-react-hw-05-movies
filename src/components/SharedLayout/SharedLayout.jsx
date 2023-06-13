import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'components/Loader';
import { Outlet } from 'react-router-dom';
import { StyledLink, Svg, Main } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <StyledLink className="navbar-brand" to="/">
            <Svg />
          </StyledLink>

          <Nav className="me-auhref">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Navbar>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
