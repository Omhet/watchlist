import { Movie } from './movie';

export interface User {
  isLoggedIn: boolean;
  username?: string;
}

export type UserResponse = Omit<User, 'isLoggedIn'> & {
  movies: Omit<Movie, 'isInWatchlist'>[];
};
