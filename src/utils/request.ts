import {
  Movie,
  MovieRequest,
  MovieResponse,
  MovieResponseItem
} from '../types/movie';
import { UserResponse, UserUpdateParams } from '../types/user';

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

export const fetchCurrentUser = async (): Promise<UserResponse> => {
  const res = await fetch(`${process.env.WATCHLIST_API_URL}/me`, {
    credentials: 'include'
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

export const signInUser = async (
  username: string,
  password: string
): Promise<any> => {
  const body = JSON.stringify({
    username,
    password
  });
  await fetch(`${process.env.WATCHLIST_API_URL}/auth/login`, {
    method: 'POST',
    body,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const signUpUser = async (
  username: string,
  password: string
): Promise<any> => {
  const body = JSON.stringify({
    username,
    password
  });
  const res = await fetch(`${process.env.WATCHLIST_API_URL}/auth/register`, {
    method: 'POST',
    body,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
  if (res.status >= 400) {
    throw new Error('Register failed');
  }
};

export const signOutUser = async (): Promise<any> => {
  await fetch(`${process.env.WATCHLIST_API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const addMovieToWatchlist = async (movie: Movie): Promise<any> => {
  const body = JSON.stringify(movie);
  await fetch(`${process.env.WATCHLIST_API_URL}/me/movies`, {
    method: 'POST',
    body,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const removeMovieFromWatchlist = async (id: string): Promise<any> => {
  await fetch(`${process.env.WATCHLIST_API_URL}/me/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const updateCurrentUser = async (
  params: UserUpdateParams
): Promise<any> => {
  const body = JSON.stringify(params, (_, value) =>
    value === '' ? undefined : value
  );
  await fetch(`${process.env.WATCHLIST_API_URL}/me`, {
    method: 'PUT',
    body,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};

export const deleteCurrentUser = async (): Promise<any> => {
  await fetch(`${process.env.WATCHLIST_API_URL}/me`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });
};
