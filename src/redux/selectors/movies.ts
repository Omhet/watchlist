/* eslint-disable @typescript-eslint/camelcase */
import { Movies, MovieResponse } from '../../types/movie';
import { RootState } from '../types';

export const isMovieInWatchlist = (state: RootState, id: string) => {
  const { watchlist } = state.movies;
  return watchlist[id] !== undefined;
};

export const getMoviesFromResponse = (
  state: RootState,
  response: Array<MovieResponse>
): Movies => {
  const movies = {};
  for (const { poster_path, vote_average, title, id } of response) {
    movies[id] = {
      id,
      rate: vote_average,
      title,
      isInWatchlist: isMovieInWatchlist(state, id),
      poster: `https://image.tmdb.org/t/p/w342${poster_path}`
    };
  }
  return movies;
};
