import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UrlImg } from 'components/utils/UrlImg';
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
//protoType
export default Gallery;
