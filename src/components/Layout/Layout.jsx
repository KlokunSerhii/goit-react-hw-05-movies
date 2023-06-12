import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Svg, Main } from './Layout.styled';

const Layout = () => {
  return (
    <div>
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
      <Suspense fallback={<div>Loading...</div>}>      
      <Main>
        <Outlet />
      </Main>
      </Suspense>

    </div>
  );
};
export default Layout;
