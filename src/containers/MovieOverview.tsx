import React, { FunctionComponent, useEffect, useCallback } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMovieToOverview,
  toggleMovieInWatchlist
} from '../redux/modules/movies';
import { RootState } from '../redux/types';
import CastList from '../components/CastList/CastList';

interface Props {
  id: string;
}

const MovieOverview: FunctionComponent<Props> = ({ id }) => {
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
    <>
      <MovieInfo onToggleWatchlistClick={toggleWatchlistHandle} {...movie} />
      <CastList cast={movie.cast} />
    </>
  );
};

export default MovieOverview;
