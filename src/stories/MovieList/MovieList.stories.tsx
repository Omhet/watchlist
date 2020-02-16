import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import movies from './data.json';

export default {
  title: 'MovieList'
};

export const Basic = () => <MovieList movies={movies} />;
