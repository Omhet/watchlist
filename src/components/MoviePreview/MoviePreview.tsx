import React, { FunctionComponent, useCallback, useState } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import StarIcon from '../../icons/Star.svg';
import PlusIcon from '../../icons/Plus.svg';
import TickIcon from '../../icons/Tick.svg';
import Button from '../Button/Button';
import { Movie } from '../../types/movie';
import MovieRibbonIcon from '../MovieRibbonIcon/MovieRibbonIcon';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist
} from '../../utils/request';
import { toggleMovieInWatchlistLocally } from '../../redux/modules/movies';
import { dialogFsa } from '../../redux/modules/dialog';
import { DialogId } from '../../types/dialog';

interface Props {
  movie: Movie;
  showInfo?: boolean;
  size?: 's' | 'm';
}

const MoviePreview: FunctionComponent<Props> = ({
  movie,
  showInfo = true,
  size = 's'
}) => {
  const { poster, title, rate, isInWatchlist, id } = movie;
  const dispatch = useDispatch();
  const history = useHistory();
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const [isLoading, setIsLoading] = useState(false);

  const handleWatchlistClick = useCallback(async () => {
    if (isLoading) return;

    if (!isSignedIn) {
      dispatch(dialogFsa.openDialog(DialogId.SignIn));
      return;
    }

    setIsLoading(true);
    if (!isInWatchlist) {
      await addMovieToWatchlist(movie);
    } else {
      await removeMovieFromWatchlist(id);
    }
    setIsLoading(false);

    dispatch(toggleMovieInWatchlistLocally(movie));
  }, [isInWatchlist, isSignedIn, isLoading, movie, id]);

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
        {isLoading ? (
          'Loading'
        ) : (
          <div
            className={classnames(styles.watchlistButton, {
              [styles.m]: size === 'm'
            })}
          >
            {ButtonIcon}
            Watchlist
          </div>
        )}
      </Button>
    </div>
  );
};

export default MoviePreview;
