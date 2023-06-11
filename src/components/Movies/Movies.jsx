import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiServices from 'services/api';
import { Ul, Label, Input, Submit, Container } from './Movies.styled';
import { Link } from 'react-router-dom';

function Movies() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');

  useEffect(() => {
    const Api = new ApiServices();
    Api.fetchSearch(query, page).then(({ results, total_pages }) => {
      setResults(preResults => [...preResults, ...results]);
      setTotalPages(total_pages);
    });
  }, [query, page]);

  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setQuery(form.elements.input.value);
    setResults([]);
  };
  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <form onSubmit={handlerSubmit}>
        <Label>
          <Input type="text" name="input" placeholder="Search film" />
          <Submit type="submit">
            <BsArrowRightCircleFill />
          </Submit>
        </Label>
      </form>

      <Ul>
        {results.map(({ title, poster_path, id }) => (
          <Card style={{ width: '15rem' }} key={id}>
            <Card.Img
              variant="top"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/395x574?text=No+Image'
              }
            />
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Card.Title>{title}</Card.Title>
              <Link to=":movieId">
                <Button variant="primary">Movie Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Ul>
      {page < totalPages && <button onClick={onClick}> Load more</button>}
    </Container>
  );
}

export default Movies;
