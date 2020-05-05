import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import PlayIcon from '../../icons/Play.svg';
import { Movie } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props extends Movie {
  backdropPoster: string;
  year: string;
  genres: string;
  runtime: string;
  onToggleWatchlistClick(movie: Movie): void;
}

const MovieInfo: FunctionComponent<Props> = ({
  backdropPoster,
  poster,
  genres,
  runtime,
  year,
  title,
  rate,
  isInWatchlist,
  id,
  onToggleWatchlistClick
}) => {
  const movie = { poster, title, rate, isInWatchlist, id };
  return (
    <div className={styles.main}>
      <div className={styles.infoBlock}>
        <div className={styles.preview}>
          <MoviePreview
            onWatchlistClick={onToggleWatchlistClick}
            movie={movie}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.additionalInfo}>
            <span>{year}</span>
            <span>{genres}</span>
            <span>{runtime}</span>
          </div>
          <a className={styles.trailerLink}>
            <PlayIcon width={16} height={16} className={styles.playIcon} />
            <span>Watch Trailer</span>
          </a>
        </div>
      </div>
      <div className={styles.backdrop}>
        <img className={styles.backdropPoster} src={backdropPoster} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default MovieInfo;
