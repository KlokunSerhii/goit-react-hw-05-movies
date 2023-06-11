import { Container, Title } from 'components/Home/Home.styled';
import Home from '../components/Home/Home';
function HomePage() {
  return (
    <Container>
      <Title>The most popular movies today</Title>
      <Home />
    </Container>
  );
}

export default HomePage;
