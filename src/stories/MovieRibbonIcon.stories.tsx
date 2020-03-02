import React from 'react';
import MovieRibbonIcon from '../components/MovieRibbonIcon/MovieRibbonIcon';

export default {
  title: 'MovieRibbonIcon'
};

export const Basic = () => <MovieRibbonIcon isInWatchlist={false} />;

export const InWatchlist = () => <MovieRibbonIcon isInWatchlist />;
