import { useEffect } from 'react';
import { BsEraser } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovieSearch } from 'services/api';
import { Ul, Container } from '../Home/Home.styled';
import Gallery from 'components/Gallery';
import Form from 'components/Form';
import { useStateContext } from 'contex/StateContext';

function Movies() {
  const { resultsSearch, setResultsSearch, totalPages, setTotalPages } =
    useStateContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = 1;
  const query = searchParams.get('query');
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!query) return;
    getMovieSearch(query, currentPage)
      .then(({ results, total_pages }) => {
        setResultsSearch(preResults => [...preResults, ...results]);
        setTotalPages(total_pages);
      })
      .catch(<BsEraser />);
  }, [currentPage, query, setTotalPages, setResultsSearch]);

  const onSubmit = form => {
    setSearchParams({ query: form, page: String(page) });
    setResultsSearch([]);
  };

  const onClick = () => {
    setSearchParams({ query: query, page: String(Number(currentPage) + 1) });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} />
      <Ul>
        <Gallery results={resultsSearch} />
      </Ul>
      {page < totalPages && <button onClick={onClick}> Load more</button>}
    </Container>
  );
}

export default Movies;
