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
import { isMovieInWatchlist } from '../../redux/selectors/movies';

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
  const { poster, title, rate, id } = movie;
  const dispatch = useDispatch();
  const history = useHistory();
  const isSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
  const isInWatchlist = useSelector((state: RootState) =>
    isMovieInWatchlist(state, id)
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleWatchlistClick = useCallback(async () => {
    if (isLoading) return;

    if (!isSignedIn) {
      dispatch(dialogFsa.openDialog(DialogId.SignIn));
      return;
    }

    setIsLoading(true);
    try {
      if (!isInWatchlist) {
        await addMovieToWatchlist(movie);
      } else {
        await removeMovieFromWatchlist(id);
      }
      dispatch(toggleMovieInWatchlistLocally(movie));
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
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
      <Button
        variant="primary"
        showLoader={isLoading}
        onClick={handleWatchlistClick}
        className={classnames(styles.watchlistButton, {
          [styles.m]: size === 'm'
        })}
      >
        <>
          {ButtonIcon}
          Watchlist
        </>
      </Button>
    </div>
  );
};

export default MoviePreview;
