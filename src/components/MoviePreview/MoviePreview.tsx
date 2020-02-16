import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import SaveIcon from '../../icons/PlusRibbon.svg';
import StarIcon from '../../icons/Star.svg';
import PlusIcon from '../../icons/Plus.svg';
import TickIcon from '../../icons/Tick.svg';
import SavedIcon from '../../icons/TickRibbon.svg';
import Button from '../Button/Button';

interface Props {
  poster: string;
  title: string;
  rate: string;
  isInWatchlist: boolean;
  onCardClick?(): void;
  onAddToWatchlist?(): void;
}

const MoviePreview: FunctionComponent<Props> = ({
  onCardClick,
  onAddToWatchlist,
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
      <div onClick={onCardClick} className={styles.preview}>
        {CardIcon}
        <img className={styles.poster} src={poster} alt={title} />
        <div className={styles.info}>
          <span className={styles.rate}>
            <StarIcon className={styles.starIcon} />
            {rate}
          </span>
          <h3>{title}</h3>
        </div>
      </div>
      <Button onClick={onAddToWatchlist}>
        <div className={styles.addToWatchlistButton}>
          {ButtonIcon}
          Watchlist
        </div>
      </Button>
    </div>
  );
};

export default MoviePreview;
