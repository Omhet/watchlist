/* eslint-disable @typescript-eslint/camelcase */
import { MovieRecord, MovieResponse } from '../types/movie';

export const mapMoviesResponseToMovieRecord = (
  response: Array<MovieResponse>
): MovieRecord => {
  const movieList = {};
  for (const { poster_path, vote_average, title, id } of response) {
    movieList[id] = {
      id,
      rate: vote_average,
      title,
      isInWatchlist: false,
      poster: `https://image.tmdb.org/t/p/w342${poster_path}`
    };
  }
  return movieList;
};
