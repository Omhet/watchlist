import { Movies } from './movie';

export interface User {
  isSignedIn: boolean;
  username?: string;
}

export type UserResponse = Omit<User, 'isSignedIn'> & {
  movies: Movies;
};

export enum UserError {
  UserExists = 'user_exists'
}
export interface UserUpdateParams {
  username: string;
  password: string;
}

export interface UserSignInErrors {
  username?: string;
  password?: string;
  repeatedPassword?: string;
  general?: string;
}
