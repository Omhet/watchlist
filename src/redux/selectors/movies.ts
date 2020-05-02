/* eslint-disable @typescript-eslint/camelcase */
import { Movies, MovieResponse } from '../../types/movie';
import { RootState } from '../types';

export const isMovieInWatchlist = (state: RootState, id: string) => {
  const { watchlist } = state.movies;
  return watchlist.some(m => m.id === id);
};

export const getMoviesFromResponse = (
  state: RootState,
  response: Array<MovieResponse>
): Movies => {
  return response.map(({ poster_path, vote_average, title, id }) => ({
    id,
    rate: vote_average,
    title,
    isInWatchlist: isMovieInWatchlist(state, id),
    poster: `https://image.tmdb.org/t/p/w342${poster_path}`
  }));
};
