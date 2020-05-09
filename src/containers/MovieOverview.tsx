import React, { FunctionComponent, useEffect, useCallback } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMovieToOverview,
  toggleMovieInWatchlist
} from '../redux/modules/movies';
import { RootState } from '../redux/types';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import PersonCard from '../components/PersonCard/PersonCard';

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
      <HorizontalList>
        {movie.cast.map(person => (
          <PersonCard key={person.image} {...person} title={person.character} />
        ))}
      </HorizontalList>
    </>
  );
};

export default MovieOverview;
