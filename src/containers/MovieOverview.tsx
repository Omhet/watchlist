import React, { FunctionComponent, useEffect, useState } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { fetchMovieInfo } from '../utils/request';
import { MovieWithInfo } from '../types/movie';
import { getMovieWithInfoFromResponse } from '../redux/selectors/movies';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

interface Props {
  id: string;
}

const SearchMovies: FunctionComponent<Props> = ({ id }) => {
  const [movie, setMovie] = useState<MovieWithInfo>({
    id,
    poster: '',
    title: '',
    rate: '',
    isInWatchlist: false,
    creators: [],
    genres: []
  });
  useEffect(() => {
    (async function() {
      try {
        const movieResult = await fetchMovieInfo({ id });
        const movie = useSelector((state: RootState) =>
          getMovieWithInfoFromResponse(state, movieResult)
        );
        if (movie !== undefined) {
          setMovie(movie);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <>
      <MovieInfo
        onToggleWatchlistClick={movie => console.log(movie)}
        {...movie}
      />
    </>
  );
};

export default SearchMovies;
