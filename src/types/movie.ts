export interface Movie {
  id: string;
  poster: string;
  title: string;
  rate: string;
}

export type Cast = Array<{ image: string; name: string; character: string }>;
export type Creators = Array<{ name: string; job: string }>;

export interface MovieWithInfo extends Movie {
  backdropPoster?: string;
  year?: string;
  genres: string[];
  runtime?: string;
  tagline?: string;
  plot?: string;
  creators: Creators;
  cast: Cast;
  trailerKey?: string;
}

export interface MovieRequest {
  page?: number;
  query?: string;
  id?: string;
}

export type Videos = { results: Array<{ key: string; type: string }> };

export interface MovieResponseItem {
  id: string;
  poster_path: string;
  backdrop_path: string;
  genres: Array<{ name: string }>;
  title: string;
  overview: string;
  tagline: string;
  runtime: number;
  release_date: string;
  vote_average: string;
  videos: Videos;
  credits: {
    crew: Array<{ job: string; name: string }>;
    cast: Array<{ profile_path: string; name: string; character: string }>;
  };
}

export type MovieResponse = Array<MovieResponseItem>;

export type Movies = Array<Movie>;
