import React from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';

export default {
  title: 'MovieInfo'
};

const props = {
  id: '1',
  title: 'Jojo Rabbit',
  poster: 'https://image.tmdb.org/t/p/w342/7GsM4mtM0worCtIVeiQt28HieeN.jpg',
  rate: 8.2,
  isInWatchlist: false,
  year: '2019',
  genres: 'Comedy, War, Drama',
  runtime: '1h 48m',
  tagline: 'An anti-hate satire.',
  plot:
    'A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.',
  backdropPoster:
    'https://image.tmdb.org/t/p/w1280/xqx5XqTeN3krSM5JFYGsxX81CRk.jpg',
  creators: [
    { name: 'Taika Waititi', job: 'Director' },
    { name: 'Christine Leunens', job: 'Novel' }
  ]
};
export const Basic = () => (
  <div style={{ width: 1024 }}>
    <MovieInfo {...props} />
  </div>
);
