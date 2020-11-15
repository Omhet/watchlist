import React, { FunctionComponent, useEffect } from 'react';
import MovieOverview from '../components/MovieOverview/MovieOverview';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieToOverview } from '../redux/modules/movies';
import { RootState } from '../redux/types';

interface Props {
  id: string;
}

const MovieOverviewContainer: FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieToOverview(id));
  }, [id]);

  const movie = useSelector((state: RootState) => state.movies.movieOverview);
  return <MovieOverview movie={movie} />;
};

export default MovieOverviewContainer;
