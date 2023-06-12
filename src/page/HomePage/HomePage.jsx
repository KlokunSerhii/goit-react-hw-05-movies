import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTrending } from 'services/api';
import { Link,useLocation } from 'react-router-dom';


import { Container, Title,Ul } from './Home.styled';
function HomePage() {

  const [results, setResults] = useState([]);
  const location = useLocation()
  useEffect(() => {
    fetchTrending().then(({ results }) => {
      setResults(preResults => [...preResults, ...results]);
    });
  }, []);

  return (
    <Container>
      <Title>The most popular movies today</Title>
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
            <Link to={`movies/${id}`} state={{ from: location }}>
              <Button variant="primary">Movie Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Ul>
    </Container>
  );
}

export default HomePage;
