import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchSearch } from 'services/api';
import { Ul, Container } from './Home/Home.styled';
import { useSearchParams, useLocation } from 'react-router-dom';
import Gallery from 'components/Gallery';
import Form from 'components/Form';

function MoviesPage() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) return;
    fetchSearch(searchParams.get('query'), page)
      .then(({ results, total_pages }) => {
        setResults(preResults => [...preResults, ...results]);
        setTotalPages(total_pages);
      })
      .catch(console.error(Error));
  }, [searchParams, page]);

  const onSubmit = form => {
    setSearchParams({ query: form });
    setResults([]);
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} />
      <Ul>
        <Gallery results={results} location={location} />
      </Ul>
      {page < totalPages && <button onClick={onClick}> Load more</button>}
    </Container>
  );
}

export default MoviesPage;
