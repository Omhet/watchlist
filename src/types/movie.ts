export interface Movie {
  id: string;
  poster: string;
  title: string;
  rate: number;
  isInWatchlist: boolean;
}

export type Watchlist = Record<string, Movie>;
