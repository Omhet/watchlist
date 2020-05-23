import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import MovieInfo from '../MovieInfo/MovieInfo';
import CastList from '../CastList/CastList';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import { Movie, MovieWithInfo } from '../../types/movie';

interface Props {
  movie: MovieWithInfo;
  onToggleWatchlist(movie: Movie): void;
}

const MovieOverview: FunctionComponent<Props> = ({
  movie,
  onToggleWatchlist
}) => {
  const { trailerKey } = movie;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieInfo onToggleWatchlistClick={onToggleWatchlist} {...movie} />
      <CastList className={styles.cast} cast={movie.cast} />
      {trailerKey !== undefined && (
        <YoutubeVideo className={styles.trailer} videoKey={trailerKey} />
      )}
    </>
  );
};

export default MovieOverview;
