import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchSearch } from 'services/api';
import { Ul, Container } from '../Home/Home.styled';
import { useSearchParams } from 'react-router-dom';
import Gallery from 'components/Gallery';
import Form from 'components/Form';
import { BsEraser } from 'react-icons/bs';

function Movies() {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const page = 1;
  const query = searchParams.get('query');
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!query) return;
    fetchSearch(query, currentPage)
      .then(({ results, total_pages }) => {
        setResults(preResults => [...preResults, ...results]);
        setTotalPages(total_pages);
      })
      .catch(<BsEraser />);
  }, [currentPage, query]);

  const onSubmit = form => {
    setSearchParams({ query: form, page: String(page) });
    setResults([]);
  };

  const onClick = () => {
    setSearchParams({ query: query, page: String(Number(currentPage) + 1) });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} />
      <Ul>
        <Gallery results={results} />
      </Ul>
      {page < totalPages && <button onClick={onClick}> Load more</button>}
    </Container>
  );
}

export default Movies;
