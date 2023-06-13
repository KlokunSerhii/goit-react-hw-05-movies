import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { Container, Title, Ul } from './Home.styled';
import Gallery from '../../components/Gallery/Gallery';
import { BsEraser } from 'react-icons/bs';
function Home() {
  const [results, setResults] = useState([]);

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
        <Gallery results={results}/>
      </Ul>
    </Container>
  );
}

export default Home;
