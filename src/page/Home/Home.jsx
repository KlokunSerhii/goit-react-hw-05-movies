import { useEffect } from 'react';
import { BsEraser } from 'react-icons/bs';
import { getMovieTrending } from 'services/api';
import { Container, Title, Ul } from './Home.styled';
import Gallery from '../../components/Gallery/Gallery';
import { useStateContext } from 'contex/StateContext';

function Home() {
  const { results, setResults } = useStateContext();

  useEffect(() => {
    getMovieTrending()
      .then(({ results }) => {
        setResults(preResults => [...preResults, ...results]);
      })
      .catch(<BsEraser />);
  }, [setResults]);

  return (
    <Container>
      <Title>The most popular movies today</Title>
      <Ul>
        <Gallery results={results} />
      </Ul>
    </Container>
  );
}

export default Home;
