import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UrlImg } from 'components/utils/UrlImg';
import PropTypes from 'prop-types';

function Gallery({ results, location }) {
  return (
    <>
      {results.map(({ title, poster_path, id }) => (
        <Card style={{ width: '15rem' }} key={id}>
          <Card.Img variant="top" src={UrlImg(poster_path)} />
          <Card.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Card.Title>{title}</Card.Title>
            <Link to={`/movie/${id}`} state={{ from: location }}>
              <Button variant="primary">Movie Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

Gallery.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  location: PropTypes.string.isRequired,
};
export default Gallery;
