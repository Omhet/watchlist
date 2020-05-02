export interface Movie {
  id: string;
  poster: string;
  title: string;
  rate: number;
  isInWatchlist: boolean;
}

export interface MovieRequest {
  page: number;
  query?: string;
}

export interface MovieResponse {
  id: string;
  poster_path: string;
  title: string;
  vote_average: string;
}

export type Movies = Record<string, Movie>;
