import { MovieRequest } from '../types/movie';

export const fetchFeaturedMovies = async ({ page }: MovieRequest) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=16a9a816f5f270bded4ebfa953a7ee0f&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchSearchMovies = async ({ page, query }: MovieRequest) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=16a9a816f5f270bded4ebfa953a7ee0f&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await res.json();
  return data.results;
};
