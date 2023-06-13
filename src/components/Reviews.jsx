import { useEffect, useState } from 'react';
import { fetchReviews } from '../services/api';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from '../page/Home/Home.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) =>
      setReviews(prevReviews => [...prevReviews, ...results])
    );
  }, [movieId]);
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
