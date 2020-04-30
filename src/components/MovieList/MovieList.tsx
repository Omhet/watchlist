import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Movie, MovieRecord } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props {
  movies: MovieRecord;
  onMovieClick?(): void;
  onWatchlistClick(movie: Movie): void;
}

const MovieList: FunctionComponent<Props> = ({
  movies,
  onWatchlistClick,
  onMovieClick
}) => {
  return (
    <div className={styles.main}>
      {Object.values(movies).map(movie => (
        <MoviePreview
          onWatchlistClick={onWatchlistClick}
          onMovieClick={onMovieClick}
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;
