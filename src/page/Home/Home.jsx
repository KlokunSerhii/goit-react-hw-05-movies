import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { useLocation } from 'react-router-dom';
import { Container, Title, Ul } from './Home.styled';
import Gallery from '../../components/Gallery/Gallery';
import { BsEraser } from 'react-icons/bs';
function HomePage() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => {
        setResults(preResults => [...preResults, ...results]);
      })
      .catch(<BsEraser />);
  }, []);

  return (
    <Container>
      <Title>The most popular movies today</Title>
      <Ul>
        <Gallery results={results} location={location} />
      </Ul>
    </Container>
  );
}

export default HomePage;
