import React, { FunctionComponent, useCallback } from 'react';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';
import { useDispatch } from 'react-redux';
import { moviesFsa } from '../redux/modules/movies';

interface Props {
  query: string;
}

const SearchMovies: FunctionComponent<Props> = ({ query }) => {
  const dispatch = useDispatch();
  const handleMount = useCallback(() => {
    dispatch(moviesFsa.setMoviesTitle(`Results for: ${query}`));
  }, [query]);

  return <MoviesBlock onMount={handleMount} />;
};

export default SearchMovies;
