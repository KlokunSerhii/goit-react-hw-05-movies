import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledLink, Svg } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Svg />
          </Navbar.Brand>

          <Nav className="me-auhref">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="movies">Movies</StyledLink>
            <StyledLink to="movies/:movieId">Movie</StyledLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default Layout;
