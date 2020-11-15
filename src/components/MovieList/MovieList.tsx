import React, { FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './style.scss';
import { Movies } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props {
  movies: Movies;
  onReachListEnd?(page: number): void;
}

const MovieList: FunctionComponent<Props> = ({ movies, onReachListEnd }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const [page, setPage] = useState(1);
  useEffect(() => {
    if (inView) {
      const nextPage = page + 1;
      setPage(nextPage);
      onReachListEnd && onReachListEnd(nextPage);
    }
  }, [inView, onReachListEnd]);

  return (
    <div className={styles.main}>
      {movies.map(movie => (
        <div ref={onReachListEnd ? ref : null} key={movie.id}>
          <MoviePreview movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
