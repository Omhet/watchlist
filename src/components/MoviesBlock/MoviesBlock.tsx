import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import MoviesTitle from '../../containers/MoviesTitle';
import { Movies } from '../../types/movie';
import MovieList from '../MovieList/MovieList';

interface Props {
  movies: Movies;
  onMount(): void;
  onReachMovieListEnd?(page: number): void;
}

const MoviesBlock: FunctionComponent<Props> = ({
  movies,
  onMount,
  onReachMovieListEnd
}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className={styles.main}>
      <MoviesTitle className={styles.title} />
      <MovieList movies={movies} onReachListEnd={onReachMovieListEnd} />
    </div>
  );
};

export default MoviesBlock;
