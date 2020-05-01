import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import FeaturedMovies from '../../containers/FeaturedMovies';
import { Switch, Route } from 'react-router-dom';
import WatchlistMovies from '../../containers/WatchlistMovies';

const App: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.moviesBlock}>
        <Switch>
          <Route exact path="/list">
            <WatchlistMovies />
          </Route>
          <Route exact path="/">
            <FeaturedMovies />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
