import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Movie, MovieRecord } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props {
  movies: MovieRecord;
  onMovieClick?(): void;
  onAddToWatchlistClick(movie: Movie): void;
}

const MovieList: FunctionComponent<Props> = ({
  movies,
  onAddToWatchlistClick,
  onMovieClick
}) => {
  return (
    <div className={styles.main}>
      {Object.values(movies).map(movie => (
        <MoviePreview
          onAddToWatchlistClick={onAddToWatchlistClick}
          onMovieClick={onMovieClick}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;
