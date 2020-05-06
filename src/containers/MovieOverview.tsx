import React, { FunctionComponent, useEffect } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieToOverview } from '../redux/modules/movies';
import { RootState } from '../redux/types';

interface Props {
  id: string;
}

const MovieOverview: FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieToOverview(id));
  }, [id]);

  const movie = useSelector((state: RootState) => state.movies.movieOverview);
  return (
    <>
      <MovieInfo
        onToggleWatchlistClick={movie => console.log(movie)}
        {...movie}
      />
    </>
  );
};

export default MovieOverview;
