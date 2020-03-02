import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import SaveIcon from '../../icons/PlusRibbon.svg';
import StarIcon from '../../icons/Star.svg';
import PlusIcon from '../../icons/Plus.svg';
import TickIcon from '../../icons/Tick.svg';
import SavedIcon from '../../icons/TickRibbon.svg';
import Button from '../Button/Button';
import { Movie } from '../../types/movie';

interface Props extends Movie {
  onMovieClick?(): void;
  onAddToWatchlistClick?(): void;
}

const MoviePreview: FunctionComponent<Props> = ({
  onMovieClick,
  onAddToWatchlistClick,
  poster,
  title,
  rate,
  isInWatchlist
}) => {
  const ButtonIcon = isInWatchlist ? (
    <TickIcon width={20} />
  ) : (
    <PlusIcon width={12} />
  );
  const CardIcon = isInWatchlist ? (
    <SavedIcon className={styles.saveIcon} />
  ) : (
    <SaveIcon className={styles.saveIcon} />
  );
  return (
    <div>
      <div onClick={onMovieClick} className={styles.preview}>
        {CardIcon}
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
      <Button onClick={onAddToWatchlistClick}>
        <div className={styles.addToWatchlistButton}>
          {ButtonIcon}
          Watchlist
        </div>
      </Button>
    </div>
  );
};

export default MoviePreview;
