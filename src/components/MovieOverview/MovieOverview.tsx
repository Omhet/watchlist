import React, { FunctionComponent } from 'react';
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
  return (
    <>
      <MovieInfo onToggleWatchlistClick={onToggleWatchlist} {...movie} />
      <CastList cast={movie.cast} />
      <YoutubeVideo className={styles.trailer} videoKey={movie.trailerKey} />
    </>
  );
};

export default MovieOverview;
