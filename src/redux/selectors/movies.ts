/* eslint-disable @typescript-eslint/camelcase */
import {
  Movies,
  MovieResponse,
  MovieResponseItem,
  MovieWithInfo
} from '../../types/movie';
import { RootState } from '../types';
import {
  minutesToRuntimeString,
  findMainCreators,
  findTrailer
} from '../../utils/movie';
import PersonImagePlaceholder from '../../images/placeholder-person.png';

export const isMovieInWatchlist = (state: RootState, id: string) => {
  const { watchlistSet } = state.movies;
  return watchlistSet.has(id);
};

export const getMoviesFromResponse = (response: MovieResponse): Movies => {
  return response.map(({ poster_path, vote_average, title, id }) => ({
    id: String(id),
    rate: vote_average,
    title,
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
    release_date,
    videos
  } = response;
  return {
    id: String(id),
    rate: vote_average,
    title,
    poster: `https://image.tmdb.org/t/p/w342${poster_path}`,
    backdropPoster: backdrop_path
      ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
      : undefined,
    tagline,
    plot: overview,
    genres: genres.slice(0, 3).map(({ name }) => name),
    creators: findMainCreators(crew),
    runtime: minutesToRuntimeString(runtime),
    year: String(new Date(release_date).getFullYear()),
    cast: cast.slice(0, 10).map(({ name, profile_path, character }) => ({
      name,
      character,
      image: profile_path
        ? `https://image.tmdb.org/t/p/w276_and_h350_face${profile_path}`
        : PersonImagePlaceholder
    })),
    trailerKey: findTrailer(videos)
  };
};
