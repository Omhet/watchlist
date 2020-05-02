import React, { FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './style.scss';
import { Movie, Movies } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props {
  movies: Movies;
  onMovieClick?(): void;
  onWatchlistClick(movie: Movie): void;
  onReachListEnd?(page: number): void;
}

const MovieList: FunctionComponent<Props> = ({
  movies,
  onWatchlistClick,
  onMovieClick,
  onReachListEnd
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const [page, setPage] = useState(1);
  useEffect(() => {
    if (inView) {
      const nextPage = page + 1;
      setPage(nextPage);
      onReachListEnd && onReachListEnd(nextPage);
    }
  }, [inView]);

  return (
    <div className={styles.main}>
      {movies.map(movie => (
        <div ref={ref} key={movie.id}>
          <MoviePreview
            onWatchlistClick={onWatchlistClick}
            onMovieClick={onMovieClick}
            movie={movie}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
