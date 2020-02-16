import React from 'react';
import MoviePreview from './MoviePreview';

export default {
  title: 'MoviePreview'
};

const poster =
  'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg';

export const Basic = () => (
  <MoviePreview
    title="Knives Out"
    poster={poster}
    rate="8.4"
    isInWatchlist={false}
  />
);

export const inWatchlist = () => (
  <MoviePreview
    title="Knives Out"
    poster={poster}
    rate="8.4"
    isInWatchlist={true}
  />
);
