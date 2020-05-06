import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import StarIcon from '../../icons/Star.svg';
import PlusIcon from '../../icons/Plus.svg';
import TickIcon from '../../icons/Tick.svg';
import Button from '../Button/Button';
import { Movie } from '../../types/movie';
import MovieRibbonIcon from '../MovieRibbonIcon/MovieRibbonIcon';
import { useHistory } from 'react-router-dom';

interface Props {
  movie: Movie;
  showInfo?: boolean;
  size?: 's' | 'm';
  onWatchlistClick(movie: Movie): void;
}

const MoviePreview: FunctionComponent<Props> = ({
  movie,
  showInfo = true,
  size = 's',
  onWatchlistClick
}) => {
  const { poster, title, rate, isInWatchlist, id } = movie;

  const history = useHistory();

  const handleWatchlistClick = () => {
    onWatchlistClick(movie);
  };

  const handleMovieClick = () => {
    history.push(`/movie?id=${id}`);
  };

  const ButtonIcon = isInWatchlist ? (
    <TickIcon width={'1.4em'} />
  ) : (
    <PlusIcon width={'0.9em'} />
  );
  return (
    <div className={styles.main}>
      <div
        onClick={handleMovieClick}
        className={classnames(styles.preview, { [styles.m]: size === 'm' })}
      >
        <div className={styles.cardIcon}>
          <MovieRibbonIcon isInWatchlist={isInWatchlist} />
        </div>
        <img className={styles.poster} src={poster} alt={title} />
        {showInfo && (
          <div className={styles.info}>
            <span className={styles.rate}>
              <StarIcon className={styles.starIcon} />
              {rate}
            </span>
            <h3 title={title} className={styles.title}>
              {title}
            </h3>
          </div>
        )}
      </div>
      <Button onClick={handleWatchlistClick}>
        <div
          className={classnames(styles.watchlistButton, {
            [styles.m]: size === 'm'
          })}
        >
          {ButtonIcon}
          Watchlist
        </div>
      </Button>
    </div>
  );
};

export default MoviePreview;
