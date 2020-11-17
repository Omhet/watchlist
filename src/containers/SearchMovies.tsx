import React, { FunctionComponent, useCallback } from 'react';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';
import { useDispatch, useSelector } from 'react-redux';
import { moviesFsa, showSearchMovies } from '../redux/modules/movies';
import { RootState } from '../redux/types';

interface Props {
  query: string;
}

const SearchMovies: FunctionComponent<Props> = ({ query }) => {
  const dispatch = useDispatch();
  const handleMount = useCallback(() => {
    dispatch(moviesFsa.setMoviesTitle(`Results for: ${query}`));
    dispatch(showSearchMovies({ query, page: 1 }));
  }, [query]);

  const handleReachListEnd = useCallback(
    page => {
      dispatch(showSearchMovies({ query, page }));
    },
    [query]
  );

  const movies = useSelector((state: RootState) => state.movies.toShow);

  return (
    <MoviesBlock
      movies={movies}
      onReachMovieListEnd={handleReachListEnd}
      onMount={handleMount}
    />
  );
};

export default SearchMovies;
