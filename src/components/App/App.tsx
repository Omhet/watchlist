import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import Title from '../Title/Title';
import MovieList from '../../containers/MovieList';

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
        <Title className={styles.title} text="Featured movies" />
        <MovieList />
      </div>
    </div>
  );
};

export default App;
