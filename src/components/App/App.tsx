import React, { FunctionComponent, useEffect } from 'react';
import styles from './style.scss';
import FeaturedMovies from '../../containers/FeaturedMovies';
import { Switch, Route } from 'react-router-dom';
import WatchlistMovies from '../../containers/WatchlistMovies';
import SearchMovies from '../../containers/SearchMovies';
import MovieOverview from '../../containers/MovieOverviewContainer';
import PageHeader from '../../containers/PageHeader';
import Dialogs from '../../containers/dialogs/Dialogs';
import UserProfile from '../../containers/UserProfile';
import ErrorToast from '../../containers/ErrorToast';
import AppError from '../AppError/AppError';

export interface AppProps {
  isUserSignedIn: boolean;
  appError?: Error;
  pageError?: Error;
  onStart(): void;
}

const App: FunctionComponent<AppProps> = ({
  onStart,
  isUserSignedIn,
  appError,
  pageError
}) => {
  useEffect(() => {
    onStart();
  }, []);

  return (
    <div className={styles.main}>
      <Dialogs />

      {appError && <ErrorToast />}

      {pageError && <AppError />}

      <PageHeader />

      <Route exact path="/user">
        {isUserSignedIn && <UserProfile />}
      </Route>

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
