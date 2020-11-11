import { Movies } from '../../types/movie';
import { fetchCurrentUser } from '../../utils/request';
import { ThunkAction } from '../types';
import { moviesFsa } from './movies';
import { userFsa } from './user';

export const startApp = (): ThunkAction => async dispatch => {
  const { username, movies } = await fetchCurrentUser();
  dispatch(userFsa.signIn({ username }));
  const moviesInWatchlist: Movies = movies.map(movie => ({
    ...movie,
    isInWatchlist: true
  }));
  dispatch(moviesFsa.setMoviesToWatchlist(moviesInWatchlist));
};
