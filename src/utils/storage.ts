import { Movies } from '../types/movie';

export const save = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const load = (key: string): unknown => {
  const value = localStorage.getItem(key);
  return value === null ? undefined : JSON.parse(value);
};

export const saveWatchlist = (watchlist: Movies) => {
  save('watchlist', watchlist);
};

export const loadWatchlist = () => {
  const watchlist = load('watchlist') as Movies | undefined;
  return watchlist === undefined || !Array.isArray(watchlist) ? [] : watchlist;
};
