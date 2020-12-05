import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import MoviesTitle from '../../containers/MoviesTitle';
import { Movies } from '../../types/movie';
import MovieList from '../MovieList/MovieList';
import Loader from '../Loader/Loader';

interface Props {
  areMoviesLoading: boolean;
  movies: Movies;
  onMount(): void;
  onReachMovieListEnd?(page: number): void;
}

const MoviesBlock: FunctionComponent<Props> = ({
  movies,
  areMoviesLoading,
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
      {areMoviesLoading && (
        <div className={styles.loaderContainer}>
          <Loader className={styles.loader} />
          <p>Movies are loading...</p>
        </div>
      )}
    </div>
  );
};

export default MoviesBlock;
