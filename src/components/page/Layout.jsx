import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBadge8KFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  <>
    {' '}
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <BsBadge8KFill />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="movies">Movies</Nav.Link>
          <Nav.Link href="movies/:movieId">Movie</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet />
  </>;
};
export default Layout;
