import React from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import MovieList from '../MovieList/MovieList';
import movies from '../../stories/MovieList/data.json';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
