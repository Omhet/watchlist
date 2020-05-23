import React, { FunctionComponent, useEffect, useCallback } from 'react';
import MovieOverview from '../components/MovieOverview/MovieOverview';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMovieToOverview,
  toggleMovieInWatchlist
} from '../redux/modules/movies';
import { RootState } from '../redux/types';

interface Props {
  id: string;
}

const MovieOverviewContainer: FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieToOverview(id));
  }, [id]);

  const toggleWatchlistHandle = useCallback(
    movie => {
      dispatch(toggleMovieInWatchlist(movie));
    },
    [id]
  );

  const movie = useSelector((state: RootState) => state.movies.movieOverview);
  return (
    <MovieOverview movie={movie} onToggleWatchlist={toggleWatchlistHandle} />
  );
};

export default MovieOverviewContainer;
