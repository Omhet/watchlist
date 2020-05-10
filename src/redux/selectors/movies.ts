/* eslint-disable @typescript-eslint/camelcase */
import {
  Movies,
  MovieResponse,
  MovieResponseItem,
  MovieWithInfo
} from '../../types/movie';
import { RootState } from '../types';
import { minutesToRuntimeString } from '../../utils/misc';

export const isMovieInWatchlist = (state: RootState, id: string) => {
  const { watchlist } = state.movies;
  return watchlist.some(m => m.id === id);
};

export const getMoviesFromResponse = (
  state: RootState,
  response: MovieResponse
): Movies => {
  return response.map(({ poster_path, vote_average, title, id }) => ({
    id,
    rate: vote_average,
    title,
    isInWatchlist: isMovieInWatchlist(state, id),
    poster: `https://image.tmdb.org/t/p/w342${poster_path}`
  }));
};

export const getMovieWithInfoFromResponse = (
  state: RootState,
  response: MovieResponseItem
): MovieWithInfo => {
  const {
    poster_path,
    genres,
    backdrop_path,
    tagline,
    overview,
    vote_average,
    title,
    id,
    credits: { crew, cast },
    runtime,
    release_date
  } = response;
  return {
    id,
    rate: vote_average,
    title,
    isInWatchlist: isMovieInWatchlist(state, id),
    poster: `https://image.tmdb.org/t/p/w342${poster_path}`,
    backdropPoster: `https://image.tmdb.org/t/p/w1280${backdrop_path}`,
    tagline,
    plot: overview,
    genres: genres.slice(0, 3).map(({ name }) => name),
    creators: crew.slice(0, 2),
    runtime: minutesToRuntimeString(runtime),
    year: String(new Date(release_date).getFullYear()),
    cast: cast.slice(0, 10).map(({ name, profile_path, character }) => ({
      name,
      character,
      image: `https://image.tmdb.org/t/p/w276_and_h350_face${profile_path}`
    }))
  };
};
