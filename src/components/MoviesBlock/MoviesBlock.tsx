import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import MoviesTitle from '../../containers/MoviesTitle';
import MovieList from '../../containers/MovieList';

interface Props {
  onMount(): void;
}

const MoviesBlock: FunctionComponent<Props> = ({ onMount }) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className={styles.main}>
      <MoviesTitle className={styles.title} />
      <MovieList />
    </div>
  );
};

export default MoviesBlock;
