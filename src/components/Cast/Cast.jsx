import { useEffect, useState } from 'react';
import { fetchCredits } from '../../services/api';
import { useParams } from 'react-router-dom';
import { List, ListItem, Img } from './Cast.staled';

function Cast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCredits(movieId).then(({ cast }) => {
      setCasts(cast);
    });
  }, [movieId]);
  console.log(casts);
  return (
    <>
      <h2>Cast</h2>
      <List>
        {casts.map(({ profile_path, name, original_name, id }) => (
          <ListItem key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://via.placeholder.com/395x574?text=No+Image'
              }
              alt={name}
            />
            <p>{original_name}</p>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Cast;
