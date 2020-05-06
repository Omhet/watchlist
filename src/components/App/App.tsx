import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import PageHeader from '../PageHeader/PageHeader';
import FeaturedMovies from '../../containers/FeaturedMovies';
import { Switch, Route } from 'react-router-dom';
import WatchlistMovies from '../../containers/WatchlistMovies';
import SearchMovies from '../../containers/SearchMovies';
import MovieOverview from '../../containers/MovieOverview';

const App: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <PageHeader />
      <Route
        exact
        path="/movie"
        render={({ location: { search, key } }) => {
          const id = new URLSearchParams(search).get('id') ?? '';
          return <MovieOverview key={key} id={id} />;
        }}
      />
      <div className={styles.moviesBlock}>
        <Switch>
          <Route exact path="/list">
            <WatchlistMovies />
          </Route>
          <Route
            exact
            path="/search"
            render={({ location: { search, key } }) => {
              const query = new URLSearchParams(search).get('q') ?? '';
              return <SearchMovies key={key} query={query} />;
            }}
          />
          <Route exact path="/">
            <FeaturedMovies />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
