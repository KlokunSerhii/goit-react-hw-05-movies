import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getMovieReviews } from '../../services/api';
import { Container } from '../../page/Home/Home.styled';
import { useStateContext } from 'contex/StateContext';

function Reviews() {
  const { reviews, setReviews } = useStateContext();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) =>
      setReviews(prevReviews => [...prevReviews, ...results])
    );
  }, [movieId, setReviews]);
  return (
    <Container>
      {reviews.map(({ author, id, content }) => (
        <Card
          key={id}
          border="danger"
          style={{ width: '90%', margin: '10px auto' }}
        >
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Reviews;
