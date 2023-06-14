import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledLink, Svg, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const SharedLayout = () => {
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
export default SharedLayout;
