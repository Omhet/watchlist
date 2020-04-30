import React from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import MovieList from '../MovieList/MovieList';
import movies from '../../stories/MovieList/data.json';
import Title from '../Title/Title';

const App = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.moviesBlock}>
        <Title className={styles.title} text="Featured movies" />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
