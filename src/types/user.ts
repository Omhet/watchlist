import { Movie } from './movie';

export interface User {
  isSignedIn: boolean;
  username?: string;
}

export type UserResponse = Omit<User, 'isSignedIn'> & {
  movies: Omit<Movie, 'isInWatchlist'>[];
};
