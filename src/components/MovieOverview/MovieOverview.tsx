import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import MovieInfo from '../MovieInfo/MovieInfo';
import CastList from '../CastList/CastList';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import { MovieWithInfo } from '../../types/movie';
import Loader from '../Loader/Loader';

interface Props {
  movie: MovieWithInfo;
  isLoading: boolean;
}

const MovieOverview: FunctionComponent<Props> = ({ movie, isLoading }) => {
  const { trailerKey } = movie;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.main}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader className={styles.loader} />
          <p>Movie info is loading...</p>
        </div>
      ) : (
        <>
          <MovieInfo {...movie} />
          <CastList className={styles.cast} cast={movie.cast} />
          {trailerKey !== undefined && (
            <YoutubeVideo className={styles.trailer} videoKey={trailerKey} />
          )}
        </>
      )}
    </div>
  );
};

export default MovieOverview;
