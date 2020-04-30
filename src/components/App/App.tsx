import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import MovieList from '../../containers/MovieList';
import MoviesTitle from '../../containers/MoviesTitle';

interface Props {
  onMount(): void;
}

const App: FunctionComponent<Props> = ({ onMount }) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.moviesBlock}>
        <MoviesTitle className={styles.title} />
        <MovieList />
      </div>
    </div>
  );
};

export default App;
