import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getMovieCast } from '../../services/api';
import { List } from './Cast.staled';
import { Container } from '../../page/Home/Home.styled';
import { useStateContext } from 'contex/StateContext';

function Cast() {
  const { casts, setCasts } = useStateContext();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => {
      setCasts(cast);
    });
  }, [movieId, setCasts]);

  return (
    <Container>
      <h2>Cast</h2>
      <List>
        {casts.map(({ profile_path, original_name, id }) => (
          <Card style={{ width: '9rem' }} key={id}>
            <Card.Img
              variant="top"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
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
              <Card.Title>{original_name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </List>
    </Container>
  );
}

export default Cast;
