import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Movie } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props extends Movie {
  backdropPoster: string;
  onToggleWatchlistClick(movie: Movie): void;
}

const MovieInfo: FunctionComponent<Props> = ({
  backdropPoster,
  poster,
  title,
  rate,
  isInWatchlist,
  id,
  onToggleWatchlistClick
}) => {
  const movie = { poster, title, rate, isInWatchlist, id };
  return (
    <div className={styles.main}>
      <div className={styles.preview}>
        <MoviePreview onWatchlistClick={onToggleWatchlistClick} movie={movie} />
      </div>
      <div className={styles.backdrop}>
        <img className={styles.backdropPoster} src={backdropPoster} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default MovieInfo;
