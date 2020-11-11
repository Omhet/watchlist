import { MovieRequest, MovieResponse, MovieResponseItem } from '../types/movie';

export const fetchFeaturedMovies = async ({
  page
}: MovieRequest): Promise<MovieResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchSearchMovies = async ({
  page,
  query
}: MovieRequest): Promise<MovieResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await res.json();
  return data.results;
};

export const fetchMovieInfo = async ({
  id
}: MovieRequest): Promise<MovieResponseItem> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=credits%2Cvideos`
  );
  const data = await res.json();
  return data;
};
