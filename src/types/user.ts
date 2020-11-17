import { Movies } from './movie';

export interface User {
  isSignedIn: boolean;
  username?: string;
}

export type UserResponse = Omit<User, 'isSignedIn'> & {
  movies: Movies;
};
