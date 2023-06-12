import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Svg, Main } from './Layout.styled';
// import {Spiner} from '../Spiner'
import { BallTriangle } from  'react-loader-spinner'

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
            
      <Main>
      <Suspense fallback={ <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>}>
        <Outlet />
        </Suspense>
      </Main>
      

    </div>
  );
};
export default Layout;
