/* eslint-disable @typescript-eslint/camelcase */
import { Movie } from '../types/movie';

export const mapMoviesResponseToMovies = (response: any): Movie[] => {
  return response.map(({ poster_path, vote_average, title, id }) => ({
    id,
    rate: vote_average,
    title,
    isInWatchlist: false,
    poster: `https://image.tmdb.org/t/p/w342${poster_path}`
  }));
};
