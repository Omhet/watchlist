import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Movie } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props {
  movies: Movie[];
  onMovieClick?(): void;
  onAddToWatchlistClick?(): void;
}

const MovieList: FunctionComponent<Props> = ({
  movies,
  onAddToWatchlistClick,
  onMovieClick
}) => {
  return (
    <div className={styles.main}>
      {movies.map(movie => (
        <MoviePreview
          onAddToWatchlistClick={onAddToWatchlistClick}
          onMovieClick={onMovieClick}
          key={movie.title}
          {...movie}
        />
      ))}
    </div>
  );
};

export default MovieList;
