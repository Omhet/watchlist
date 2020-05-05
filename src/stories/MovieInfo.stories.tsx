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
  backdropPoster:
    'https://image.tmdb.org/t/p/w1280/xqx5XqTeN3krSM5JFYGsxX81CRk.jpg'
};
export const Basic = () => (
  <div style={{ width: 1024 }}>
    <MovieInfo {...props} />
  </div>
);
