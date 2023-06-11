import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTrending } from 'services/api';
import { Ul } from './Home.styled';
import { Link } from 'react-router-dom';

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchTrending().then(({ results }) => {
      setResults(preResults => [...preResults, ...results]);
    });
  }, []);

  return (
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
            <Link to={`movies/${id}`}>
              <Button variant="primary">Movie Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Ul>
  );
}

export default Home;
