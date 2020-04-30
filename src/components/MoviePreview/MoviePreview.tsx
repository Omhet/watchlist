import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import StarIcon from '../../icons/Star.svg';
import PlusIcon from '../../icons/Plus.svg';
import TickIcon from '../../icons/Tick.svg';
import Button from '../Button/Button';
import { Movie } from '../../types/movie';
import MovieRibbonIcon from '../MovieRibbonIcon/MovieRibbonIcon';

interface Props {
  movie: Movie;
  onMovieClick?(): void;
  onAddToWatchlistClick(movie: Movie): void;
}

const MoviePreview: FunctionComponent<Props> = ({
  movie,
  onMovieClick,
  onAddToWatchlistClick
}) => {
  const { poster, title, rate, isInWatchlist } = movie;

  const handleAddToWatchlistClick = () => {
    onAddToWatchlistClick(movie);
  };

  const ButtonIcon = isInWatchlist ? (
    <TickIcon width={20} />
  ) : (
    <PlusIcon width={12} />
  );
  return (
    <div>
      <div onClick={onMovieClick} className={styles.preview}>
        <div className={styles.cardIcon}>
          <MovieRibbonIcon isInWatchlist={isInWatchlist} />
        </div>
        <img className={styles.poster} src={poster} alt={title} />
        <div className={styles.info}>
          <span className={styles.rate}>
            <StarIcon className={styles.starIcon} />
            {rate}
          </span>
          <h3 title={title} className={styles.title}>
            {title}
          </h3>
        </div>
      </div>
      <Button onClick={handleAddToWatchlistClick}>
        <div className={styles.addToWatchlistButton}>
          {ButtonIcon}
          Watchlist
        </div>
      </Button>
    </div>
  );
};

export default MoviePreview;
